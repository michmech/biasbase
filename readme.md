# Biasbase: a corpus of bias-causing ambiguities in translation

Biasbase is a corpus of sentences and their translations, in various language pairs, where the source-language sentence contains an ambiguity in gender, in forms of address, or in some other aspect of meaning. Biasbase can be used for developing and testing tools that tackle the problem of bias in machine translation. It is used, among other things, for testing and evaluating [Fairslator](https://www.fairslator.com/), an experimental application for removing bias from machine translation.

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

**The second line** contains one possible translation which would typically be returned by a general-purpose machine translation systems such as Google Translate or DeepL. This translation is biased because it expresses only one of four possible readings of the source-language sentence: the one where the director is masculine and the "you" is formal or plural.

**The remaining lines** contain the other possible translations: the ones that a machine translation system would typically not return, but which are nonetheless valid.

The tags in angle brackets at the end of each translation are disambiguators which indicate the reading on which the translation is based. For example:

- `<1:sm>` means that the participant which is referred to in the first person `1` is singular `s` and male `m`.

- `<2:vs|p>` means that the participant which is referred to in the second person `2` is either in the formal *vous* register `v` and singular `s`, or plural `p`.

Each language pair in Biasbase comes with its own taxonomy of such disambiguators for decribing how multiple translations of the same sentence differ from each other. All language pairs can be found in the `languagePairs` folder in this repository.

We also have a more detailed description of the [Format and Structure of Biasbase](format.md): read that if you want to parse the corpus and use it in your own work.

Everything in Biasbase -- all the sentences, their translations and their disambiguators -- have been checked manually and can be taken as a gold standard.

## Where Biasbase comes from

Biasbase is a by-product of the [Fairslator](https://www.fairslator.com/) project. Fairslator is a plug-in which works with any machine translation system. It detects ambiguities of the kind exemplified above, asks the human user to disambiguate them manually, and re-inflects the translation to refect the user's choices: for example by changing male nouns to female nouns.

## Contributing to Biasbase

Like Fairslator, Biasbase is mostly the work of me, [Michal Měchura](http://www.lexiconista.com/). Biasbase is an open-source dataset and I will be happy to welcome contributions from others, especially in language pairs Biasbase doesn't have yet. Your contribution will help me implement your language pair in Fairslator, and will also be available to anyone else who may be studying machine translation bias or developing tools for mitigating bias in machine translation. If you're thinking of contributing, it's best if you contact me first though, to clarify a few organisational things.

## Background on machine translation bias

Bias in machine translation (including but not limited to gender bias) is mostly caused by ambiguities of the kind exemplified above, where the source-language text leaves certain things unsaid, and this makes it difficult to decide which of several possible translations is the appropriate one. In a situation like that, a machine translation system typically makes a biased decision, based on whatever it has seen more often in its training data. A human translator, on the other hand, would ask follow-up questions instead of jumping to conlusions. Fairslator's goal is to give machine translators the ability to ask follow-up questions: to recognise that human input is needed, to solicit manual disambiguation from humam users, and to reword the translation accordingly. If this topic interests you, then visit the [Fairslator website](https://www.fairslator.com/) for a deeper dive.
