# Biasbase: a corpus of bias-causing ambiguities in translation

Biasbase is a corpus of sentences and their translations, in various language pairs, where the source-language sentence contains an ambiguity in gender, in forms of address, or in some other aspect of meaning. Biasbase can be used for developing and testing tools that tackle the problem of bias in machine translation. It is used, among other things, as a test suite for evaluating [Fairslator](https://www.fairslator.com/), an experimental application for removing bias from machine translation.

Everything in Biasbase -- all the sentences, their translations and their disambiguation tags -- have been checked manually and can be taken as a gold standard.

## What Biasbase contains

Let's explain what Biasbase contains with the help of an example from the English-French language pair. Here's a sample entry from the English-French part of the corpus:

```
I am your new director.
  Je suis votre nouveau directeur. <1:sm> <2:vs|p>
    Je suis votre nouvelle directrice. <1:sf> <2:vs|p>
    Je suis ton nouveau directeur. <1:sm> <2:ts>
    Je suis ta nouvelle directrice. <1:sf> <2:ts>
```

**The first line** contains the English sentence "I am your new director." This sentence is ambiguous -- from the French point of view -- because:

1. It does not say whether the director in question is a man or a woman. Consequently, we don't know whether we should translate the word with the masculine noun *directeur* or the feminine noun *directrice*.

2. It does not say whether whoever we are addressing with the possessive pronoun *your* is one person or many, and whether they should be addressed formally or informally. Consequently, we don't know whether we should translate that bit with informal singular pronouns (*ton*, *ta*) or with formal plural pronouns (*votre*).

**The second line** (as well as any other line indented by two spaces) contains one possible translation which would typically be returned by a general-purpose machine translation systems such as Google Translate or DeepL. This translation is biased because it expresses only one of four possible readings of the source-language sentence: the one where the director is masculine and the "you" is formal or plural.

**The remaining lines** (which are indented by four spaces) contain other versions of the same translation: the ones that a machine translation system would typically not return, but which are nonetheless valid.

## Disambiguation tags

The tags in angle brackets at the end of each translated version are disambiguation tags which indicate the reading on which the translation is based. For example:

- `<1:sm>` means that the translation is based on the assumption that the first-person participant (the *I* in the sentence) is singular `s` and male `m`.

- `<2:vs|p>` means that the translation is based on the assumption that the second-person participant (the *you* in the sentence) is either singular `s` and addressed formally `v`, or plural `p`.

Each disambiguation tag is a short string which consists of the following colon-delimited subtags:

- **Subtag number one:** a number, either `1` or `2` or `3`, which tells you whether this tag describes the first-person participant (referred to by pronouns such as *me, us*), the second-person participant (referred to by pronouns such as *you*), or a third-person participant (referred to by pronouns such as *he, she*, or nouns).

- **Subtag number two:** a word or a multi-word expression from the source-language sentence, such as `nurse` or `student` or `bus driver` or `flight attendant`, which identifies the participant that this tag describes. Note: **subtag number two** is present only if **subtag number one** equals `3`, otherwise **subtag number two** is absent.  

- **Subtag number three:** A pipe-delimited sequence of codes, such as `sm` or `sf` or `vs|vp` or `tsm|tpm`, which describe various properties of the participant that this tag describes, for example gender (`m`, `f`), grammatical number (`s`, `p`) and form of address (`t`, `v`). Each language pair has its own set of these codes, they are listed and explained in each language pair's *readme* file. (Indvidual language pairs can be found in the `languagePairs` folder in this repository.)

The disambiguation tags in Biasbase broadly follow a scheme outlined in this paper:

> Michal Měchura. 2022. [A Taxonomy of Bias-Causing Ambiguities in Machine Translation](https://aclanthology.org/2022.gebnlp-1.18/). In Proceedings of the 4th Workshop on Gender Bias in Natural Language Processing (GeBNLP), pages 168–173, Seattle, Washington. Association for Computational Linguistics.

## Where Biasbase comes from

Biasbase is a by-product of the [Fairslator](https://www.fairslator.com/) project. Fairslator is a plug-in for machine translation systems which detects ambiguities of the kind exemplified above, asks the human user to disambiguate them manually, and re-inflects the translation to refect the user's choices, for example by changing male nouns to female nouns.

## Contributing to Biasbase

Like Fairslator, Biasbase is mostly the work of me, [Michal Měchura](http://www.lexiconista.com/). Biasbase is an open-source dataset and I will be happy to welcome corrections and contributions, especially in language pairs Biasbase doesn't have yet. Your contribution will help me implement your language pair in Fairslator, and will also be available to anyone else who may be studying machine translation bias or developing tools for mitigating it. If you're thinking of contributing, it's best if you contact me first though, to clarify a few organisational things.

## Background on machine translation bias

Bias in machine translation (including but not limited to gender bias) is mostly caused by ambiguities of the kind exemplified above, where the source-language text leaves certain things unsaid, and this makes it difficult to decide which of several possible translations is the appropriate one. In a situation like that, a machine translation system typically makes a biased decision, based on whatever it has seen more often in its training data. A human translator, on the other hand, would ask follow-up questions instead of jumping to conclusions. Fairslator's goal is to give machine translatrs the ability to ask follow-up questions like human translators would: to recognise that a disambiguation is needed, to solicit manual disambiguation from humam users, and to reword the translation accordingly. If this topic interests you, then visit the [Fairslator website](https://www.fairslator.com/) for a deeper dive.
