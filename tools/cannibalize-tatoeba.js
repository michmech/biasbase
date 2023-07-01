const fs=require("fs");
fs.writeFileSync("../languagePairs/en-de/corpus-ambiguous-new.txt", "", "utf8");


const siePronouns=multiplyPronouns(["sind", "Sie", "sich", "Ihnen", "Ihr", "Ihre", "Ihres", "Ihrem", "Ihren", "Ihrer"]);
const duPronouns=multiplyPronouns(["bist", "du", "dich", "dir", "dich", "dein", "deine", "deiner", "deinem", "deinen", "deines"]);
const ihrPronouns=multiplyPronouns(["seid", "ihr", "euch", "euer", "eure", "eurer", "eures", "eurem", "euren"]);

let srcText="";
let trgTexts=[];
let counter=0;
fs.readFileSync("/media/michmech/Windows/potustoronu/Sentence pairs in English-German - 2023-07-01.tsv", "utf8").split("\n").map(line => {
  line=line.replace(/\r/g, "").split("\t");
  if(line.length>=4){
    if(line[1]!=srcText){
      const obj=analyze();
      if(obj){
        fs.appendFileSync("../languagePairs/en-de/corpus-ambiguous-new.txt", `${srcText}\n`, "utf8");
        fs.appendFileSync("../languagePairs/en-de/corpus-ambiguous-new.txt", `  ${obj["Sie"]} <2:vs|vp>\n`, "utf8");
        fs.appendFileSync("../languagePairs/en-de/corpus-ambiguous-new.txt", `  ${obj["du"]} <2:ts>\n`, "utf8");
        fs.appendFileSync("../languagePairs/en-de/corpus-ambiguous-new.txt", `    ${obj["ihr"]} <2:tp>\n`, "utf8");
        counter++;
      }
      srcText=line[1];
      trgTexts=[];
    } else {
      if(trgTexts.indexOf(line[3])==-1) trgTexts.push(line[3]);
    }
  }
});
console.log(counter);

function analyze(){
  let ret=null;
  trgTexts.map(sieText => {
    if(containsPronouns(siePronouns, sieText)){
      const sig=getSignature(siePronouns, sieText);
      trgTexts.map(duText => {
        if(containsPronouns(duPronouns, duText) && getSignature(duPronouns, duText)==sig){
          trgTexts.map(ihrText => {
            if(containsPronouns(ihrPronouns, ihrText) && getSignature(ihrPronouns, ihrText)==sig){
              ret={
                "Sie": sieText,
                "du": duText,
                "ihr": ihrText,
              };
            }
          });
        }
      });
    }
  });
  return ret;
}

function multiplyPronouns(pronouns){
  const ret=[];
  pronouns.map(prn => {
    ret.push(prn);
    if(prn.toLowerCase()==prn) ret.push(prn[0].toUpperCase()+prn.substring(1));
  });
  return ret;
}

function containsPronouns(pronouns, text){
  let found=false;
  text.split(/[^\w]+/).map(word => {
    if(pronouns.indexOf(word)>-1) found=true;
  });
  return found;
}

function getSignature(pronouns, text){
  let sig="";
  text.split(/[^\w]+/).map(word => {
    if(pronouns.indexOf(word)==-1) sig+=(word[0] || "");
  });
  return sig;
}