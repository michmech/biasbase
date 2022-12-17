/*
This script computes a few interesting statistics about corpuses in the various language pairs.
Run it using Node.js.
*/

const fs=require("fs");
fs.readdirSync("../languagePairs").map(dirname => {
  if(!/\.[^\.]+$/.test(dirname)){ //if isn't a filename
    console.log();
    console.log(dirname);

    let srcCount=0;
    let trgCount=0;
    let verCount=0;
    let srcs=[];
    fs.readFileSync(`../languagePairs/${dirname}/corpus-ambiguous.txt`, "utf8").replace(/\r/g, "").split("\n").map(line => {
      if(line.trim()!=""){
        if(!line.startsWith(" ")){
          line=line.trim();
          if(srcs.indexOf(line)){ srcCount++; srcs.push(line); }
        } else if(line.startsWith("  ") && !line.startsWith("   ")){
          trgCount++;
          verCount++;
        } else if(line.startsWith("    ")) {
          verCount++;
        }
      }
    });
    console.log("- corpus-ambiguous.txt");
    console.log(`  - ${srcCount} ambiguous sentences in the source language`);
    console.log(`  - ${trgCount} biased translations of those sentences into the target language`);
    console.log(`  - ${verCount} manual disambiguations with unbiased translations`);

    srcCount=0;
    trgCount=0;
    srcs=[];
    fs.readFileSync(`../languagePairs/${dirname}/corpus-unambiguous.txt`, "utf8").replace(/\r/g, "").split("\n").map(line => {
      if(line.trim()!=""){
        if(!line.startsWith(" ")){
          line=line.trim();
          if(srcs.indexOf(line)){ srcCount++; srcs.push(line); }
        } else if(line.startsWith("  ")){
          trgCount++;
        }
      }
    });
    console.log("- corpus-unambiguous.txt");
    console.log(`  - ${srcCount} unambiguous sentences in the source language`);
    console.log(`  - ${trgCount} translations of those sentences into the target language`);
  }
});
