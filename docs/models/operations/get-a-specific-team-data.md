# GetASpecificTeamData

## Example Usage

```typescript
import { GetASpecificTeamData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTeamData = {
  id: 78,
  name: "Avengers",
  slug: "avengers",
  aliases: [
    "Earth's Mightiest Heroes",
  ],
  formationDate: "1963-09-01",
  disbandedDate: null,
  headquarters: "Avengers Tower, New York",
  membersCount: 312,
  seriesCount: 48,
  appearancesCount: 5200,
  listsCount: 86,
  imageUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
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

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 78                                                                                                              |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Avengers                                                                                                        |
| `slug`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | avengers                                                                                                        |
| `aliases`                                                                                                       | *string*[]                                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             | [<br/>"Earth's Mightiest Heroes"<br/>]                                                                          |
| `formationDate`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 1963-09-01                                                                                                      |
| `disbandedDate`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | null                                                                                                            |
| `headquarters`                                                                                                  | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Avengers Tower, New York                                                                                        |
| `membersCount`                                                                                                  | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 312                                                                                                             |
| `seriesCount`                                                                                                   | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 48                                                                                                              |
| `appearancesCount`                                                                                              | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 5200                                                                                                            |
| `listsCount`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 86                                                                                                              |
| `imageUrl`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | https://...-full_lg.webp                                                                                        |
| `images`                                                                                                        | [operations.GetASpecificTeamImages](../../models/operations/get-a-specific-team-images.md)                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `nameI18n`                                                                                                      | Record<string, [operations.GetASpecificTeamNameI18n](../../models/operations/get-a-specific-team-name-i18n.md)> | :heavy_check_mark:                                                                                              | One name per language, keyed by BCP 47 tag.                                                                     | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                     |
| `aliasesI18n`                                                                                                   | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | Alternative names per language.                                                                                 | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                 |
| `originalLocale`                                                                                                | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The language the entity is from, a BCP 47 tag.                                                                  | en                                                                                                              |