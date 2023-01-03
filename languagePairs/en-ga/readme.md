# Biasbase for English-Irish

The file `corpus-ambiguous.txt` contains:

- 254 ambiguous sentences in English
- 255 biased translations of those sentences into Irish
- 510 manual disambiguations with unbiased translations

In addition to that, the file `corpus-unambiguous.txt` contains a few translation pairs where you might think the English sentence is ambiguous but it actually isn't.

All sentences have been manually checked.

## Inventory of codes

The following codes are used in **subtag number three** in the disambiguation tags.

### Second-person codes

For tags where **subtag number one** equals `2`.

| code | number   |
|------|----------|
| `s`  | singular |
| `p`  | plural   |

Note: there are no codes for first person and third person in this language pair, as ambiguities in these persons never arise during translation.
