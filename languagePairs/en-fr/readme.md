# Biasbase for English-French

The file `corpus-ambiguous.txt` contains:

- 363 ambiguous sentences in English
- 434 biased translations of those sentences into French
- 847 manual disambiguations with unbiased translations

In addition to that, the file `corpus-unambiguous.txt` contains a few translation pairs where you might think the English sentence is ambiguous but it actually isn't.

All sentences have been manually checked.

The file `corpus-notsure.txt` contains a handful of sentences where I'm not sure whether they contain bias-causing ambiguities or, and if they do, what the unbiased translations should be.

## Note on sentence-final punctuation

Some sentences use the space-before style:

```
Vous avez soif ?
Laisse moi tranquille !
```

and some don't:

```
As-tu une voiture?
Réveillez-vous!
```

There is no particular reason for why some sentences use one style and others use the other style, it's pretty random and arbitrary. The only rule is that *all* versions of one translation follow the same style.

Those that do use the space-before style, have a normal space before the punctuation mark, *not* a non-breaking space.