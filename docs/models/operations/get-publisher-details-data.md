# GetPublisherDetailsData

## Example Usage

```typescript
import { GetPublisherDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetPublisherDetailsData = {
  id: 1,
  name: "Marvel Comics",
  foundedYear: 1939,
  website: "https://www.marvel.com",
  headquarters: "New York, NY",
  parentCompany: "The Walt Disney Company",
  status: "active",
  logoUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  firstPublishedYear: 1939,
  aliases: [
    "Timely Comics",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | 1                                                                                                                    |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | Marvel Comics                                                                                                        |
| `foundedYear`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | 1939                                                                                                                 |
| `website`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | https://www.marvel.com                                                                                               |
| `headquarters`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | New York, NY                                                                                                         |
| `parentCompany`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | The Walt Disney Company                                                                                              |
| `status`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | active, defunct, acquired or rebranded.                                                                              | active                                                                                                               |
| `logoUrl`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | https://...-full_lg.webp                                                                                             |
| `images`                                                                                                             | [operations.GetPublisherDetailsImages](../../models/operations/get-publisher-details-images.md)                      | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `firstPublishedYear`                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | 1939                                                                                                                 |
| `aliases`                                                                                                            | *operations.GetPublisherDetailsAliases*                                                                              | :heavy_check_mark:                                                                                                   | The other names, as stored: a list of strings in production.                                                         | [<br/>"Timely Comics"<br/>]                                                                                          |
| `nameI18n`                                                                                                           | Record<string, [operations.GetPublisherDetailsNameI18n](../../models/operations/get-publisher-details-name-i18n.md)> | :heavy_check_mark:                                                                                                   | One name per language, keyed by BCP 47 tag.                                                                          | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                          |
| `aliasesI18n`                                                                                                        | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | Alternative names per language.                                                                                      | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                      |
| `originalLocale`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The language the publisher is from, a BCP 47 tag.                                                                    | en                                                                                                                   |