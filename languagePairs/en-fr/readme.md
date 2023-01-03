# Biasbase for English-French

The file `corpus-ambiguous.txt` contains:

- 363 ambiguous sentences in English
- 434 biased translations of those sentences into French
- 847 manual disambiguations with unbiased translations

In addition to that, the file `corpus-unambiguous.txt` contains a few translation pairs where you might think the English sentence is ambiguous but it actually isn't.

All sentences have been manually checked.

The file `corpus-notsure.txt` contains a handful of sentences where I'm not sure whether they contain bias-causing ambiguities, and if they do, what the unbiased translations should be.

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

The space before the punctuation symbol is a normal space, *not* a non-breaking space.

## Inventory of codes

The following codes are used in **subtag number three** in the disambiguation tags.

### First-person and third-person codes

For tags where **subtag number one** equals `1` or `3`.

| code | number   | gender |
|------|----------|--------|
| `sm` | singular | male   |
| `sf` | singular | female |
| `pm` | plural   | male   |
| `pf` | plural   | female |

### Second-person codes

For tags where **subtag number one** equals `2`.

| code  | form of address | number   | gender |
|-------|-----------------|----------|--------|
| `ts`  | informal        | singular |        |
| `tsm` | informal        | singular | male   |
| `tsf` | informal        | singular | female |
| `vs`  | formal          | singular |        |
| `vsm` | formal          | singular | male   |
| `vsf` | formal          | singular | female |
| `p`   |                 | plural   |        |
| `pm`  |                 | plural   | male   |
| `pf`  |                 | plural   | female |
