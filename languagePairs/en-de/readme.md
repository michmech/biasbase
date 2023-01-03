# Biasbase for English-German

The file `corpus-ambiguous.txt` contains:

- 338 ambiguous sentences in English
- 435 biased translations of those sentences into German
- 1010 manual disambiguations with unbiased translations

In addition to that, the file `corpus-unambiguous.txt` contains a few translation pairs where you might think the English sentence is ambiguous but it actually isn't.

All sentences have been manually checked.

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
| `tp`  | informal        | plural   |        |
| `tpm` | informal        | plural   | male   |
| `tpf` | informal        | plural   | female |
| `vp`  | formal          | plural   |        |
| `vpm` | formal          | plural   | male   |
| `vpf` | formal          | plural   | female |
