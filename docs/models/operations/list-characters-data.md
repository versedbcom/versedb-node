# ListCharactersData

## Example Usage

```typescript
import { ListCharactersData } from "@versedbcom/sdk/models/operations";

let value: ListCharactersData = {
  id: 456,
  name: "Spider-Man (Peter Parker)",
  slug: "spider-man-peter-parker",
  realName: "Peter Parker",
  aliases: [
    "Spidey",
    "Web-Head",
  ],
  race: "Human",
  imageUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  appearancesCount: 5400,
  publisherName: "Marvel Comics",
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
  realNameI18n: {
    "ja": {
      value: "講談社",
      source: "madb",
      reading: "こうだんしゃ",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 456                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | Spider-Man (Peter Parker)                                                                                          |
| `slug`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | spider-man-peter-parker                                                                                            |
| `realName`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | Peter Parker                                                                                                       |
| `aliases`                                                                                                          | *string*[]                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | [<br/>"Spidey",<br/>"Web-Head"<br/>]                                                                               |
| `race`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | Human                                                                                                              |
| `imageUrl`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | https://...-full_lg.webp                                                                                           |
| `images`                                                                                                           | [operations.ListCharactersImages](../../models/operations/list-characters-images.md)                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `appearancesCount`                                                                                                 | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 5400                                                                                                               |
| `publisherName`                                                                                                    | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Present when the character has a publisher.                                                                        | Marvel Comics                                                                                                      |
| `nameI18n`                                                                                                         | Record<string, [operations.ListCharactersNameI18n](../../models/operations/list-characters-name-i18n.md)>          | :heavy_check_mark:                                                                                                 | One name per language, keyed by BCP 47 tag.                                                                        | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                        |
| `aliasesI18n`                                                                                                      | Record<string, *string*[]>                                                                                         | :heavy_check_mark:                                                                                                 | Alternative names per language.                                                                                    | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                    |
| `originalLocale`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The language the entity is from, a BCP 47 tag.                                                                     | en                                                                                                                 |
| `realNameI18n`                                                                                                     | Record<string, [operations.ListCharactersRealNameI18n](../../models/operations/list-characters-real-name-i18n.md)> | :heavy_check_mark:                                                                                                 | One name per language, keyed by BCP 47 tag.                                                                        | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                        |