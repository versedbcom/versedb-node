# GetCreatorDetailsData

## Example Usage

```typescript
import { GetCreatorDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetCreatorDetailsData = {
  id: 789,
  name: "Alan Moore",
  slug: "alan-moore",
  role: {
    id: 1,
    name: "Writer",
  },
  roles: [],
  photoUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  gender: "male",
  birth: "1953-11-18",
  death: "2026-01-01",
  birthPlace: "Northampton, England",
  country: "United Kingdom",
  aliases: [
    "Curt Vile",
  ],
  links: [
    {
      url: "https://example.com",
      type: "website",
    },
  ],
  awards: [
    {
      name: "Eisner Award",
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
      year: 1988,
    },
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 789                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | Alan Moore                                                                                                       |
| `slug`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | alan-moore                                                                                                       |
| `role`                                                                                                           | [operations.GetCreatorDetailsRole](../../models/operations/get-creator-details-role.md)                          | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `roles`                                                                                                          | [operations.GetCreatorDetailsRole](../../models/operations/get-creator-details-role.md)[]                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `photoUrl`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | https://...-full_lg.webp                                                                                         |
| `images`                                                                                                         | [operations.GetCreatorDetailsImages](../../models/operations/get-creator-details-images.md)                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `gender`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | male                                                                                                             |
| `birth`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 1953-11-18                                                                                                       |
| `death`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 2026-01-01                                                                                                       |
| `birthPlace`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | Northampton, England                                                                                             |
| `country`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | United Kingdom                                                                                                   |
| `aliases`                                                                                                        | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              | [<br/>"Curt Vile"<br/>]                                                                                          |
| `links`                                                                                                          | *operations.Links*                                                                                               | :heavy_check_mark:                                                                                               | The creator's links: a list of {url, type or label}, a few older rows a map by name, or null.                    | [<br/>{<br/>"type": "website",<br/>"url": "https://example.com"<br/>}<br/>]                                      |
| `awards`                                                                                                         | [operations.GetCreatorDetailsAward](../../models/operations/get-creator-details-award.md)[]                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `nameI18n`                                                                                                       | Record<string, [operations.GetCreatorDetailsNameI18n](../../models/operations/get-creator-details-name-i18n.md)> | :heavy_check_mark:                                                                                               | One name per language, keyed by BCP 47 tag.                                                                      | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                      |
| `aliasesI18n`                                                                                                    | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | Alternative names per language.                                                                                  | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                  |
| `originalLocale`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The language the entity is from, a BCP 47 tag.                                                                   | en                                                                                                               |