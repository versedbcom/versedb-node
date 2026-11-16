# IssueVariant

## Example Usage

```typescript
import { IssueVariant } from "@versedbcom/sdk/models/operations";

let value: IssueVariant = {
  id: 901,
  issueId: 5432,
  variantName: "Cover B",
  coverUrl: "https://...-cover_lg.webp",
  images: {
    thumb: "https://...-thumb.webp",
    coverSm: "https://...-cover_sm.webp",
    coverMd: "https://...-cover_md.webp",
    coverLg: "https://...-cover_lg.webp",
  },
  variantType: "standard",
  ratio: "1:25",
  price: "4.99",
  currencyCode: "USD",
  formattedPrice: "$4.99",
  ean: "75960609999300111",
  printRun: 3000,
  coverLetter: "B",
  isNsfw: true,
  variantNameI18n: {
    "ja": {
      value: "講談社",
      source: "madb",
      reading: "こうだんしゃ",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 901                                                                                                               |
| `issueId`                                                                                                         | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 5432                                                                                                              |
| `variantName`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Cover B                                                                                                           |
| `coverUrl`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | https://...-cover_lg.webp                                                                                         |
| `images`                                                                                                          | [operations.IssueVariantImages](../../models/operations/issue-variant-images.md)                                  | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `variantType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | standard                                                                                                          |
| `ratio`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 1:25                                                                                                              |
| `price`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 4.99                                                                                                              |
| `currencyCode`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | USD                                                                                                               |
| `formattedPrice`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | $4.99                                                                                                             |
| `ean`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 75960609999300111                                                                                                 |
| `printRun`                                                                                                        | *number*                                                                                                          | :heavy_check_mark:                                                                                                | How many copies of this cover were printed. Null when no source states it.                                        | 3000                                                                                                              |
| `coverLetter`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The letter the cover is listed under, one to three capitals (A, B, AA). Null where covers are not lettered.       | B                                                                                                                 |
| `isNsfw`                                                                                                          | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `variantNameI18n`                                                                                                 | Record<string, [operations.GetAnEventVariantNameI18n](../../models/operations/get-an-event-variant-name-i18n.md)> | :heavy_check_mark:                                                                                                | One name per language, keyed by BCP 47 tag.                                                                       | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                       |