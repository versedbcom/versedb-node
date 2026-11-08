# GetASpecificTitleData

## Example Usage

```typescript
import { GetASpecificTitleData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTitleData = {
  id: 12,
  name: "Batman",
  slug: "batman",
  startYear: 1939,
  endYear: 2011,
  status: "ongoing",
  type: "Series",
  imageUrl: "https://...-cover_md.webp",
  images: {
    coverSm: "https://...-cover_sm.webp",
    coverMd: "https://...-cover_md.webp",
    coverLg: "https://...-cover_lg.webp",
  },
  contentRatingLabel: "15+",
  minAge: 15,
  isNsfw: false,
  imprintId: 3,
  seriesCount: 25,
  issuesCount: 1450,
  averageRating: "4.30",
  aliases: [
    "The Dark Knight",
  ],
  nameI18n: {
    "ja": {
      value: "講談社",
      source: "madb",
      reading: "こうだんしゃ",
    },
  },
  aliasesI18n: {
    "en": [
      "Kodansha Comics",
    ],
  },
  originalLocale: "en",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 12                                                                                                                |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Batman                                                                                                            |
| `slug`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | batman                                                                                                            |
| `startYear`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 1939                                                                                                              |
| `endYear`                                                                                                         | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 2011                                                                                                              |
| `status`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | ongoing                                                                                                           |
| `type`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Series                                                                                                            |
| `imageUrl`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | https://...-cover_md.webp                                                                                         |
| `images`                                                                                                          | [operations.GetASpecificTitleImages](../../models/operations/get-a-specific-title-images.md)                      | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `contentRatingLabel`                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 15+                                                                                                               |
| `minAge`                                                                                                          | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 15                                                                                                                |
| `isNsfw`                                                                                                          | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `imprintId`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 3                                                                                                                 |
| `seriesCount`                                                                                                     | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 25                                                                                                                |
| `issuesCount`                                                                                                     | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 1450                                                                                                              |
| `averageRating`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 4.30                                                                                                              |
| `aliases`                                                                                                         | *operations.GetASpecificTitleAliases*                                                                             | :heavy_check_mark:                                                                                                | The other names, as stored: a list of strings in production.                                                      | [<br/>"The Dark Knight"<br/>]                                                                                     |
| `nameI18n`                                                                                                        | Record<string, [operations.GetASpecificTitleNameI18n](../../models/operations/get-a-specific-title-name-i18n.md)> | :heavy_check_mark:                                                                                                | One name per language, keyed by BCP 47 tag.                                                                       | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                       |
| `aliasesI18n`                                                                                                     | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | Alternative names per language.                                                                                   | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                   |
| `originalLocale`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The language the title is from, a BCP 47 tag.                                                                     | en                                                                                                                |