# ListCreatorsData

## Example Usage

```typescript
import { ListCreatorsData } from "@versedbcom/sdk/models/operations";

let value: ListCreatorsData = {
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 789                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | Alan Moore                                                                                            |
| `slug`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | alan-moore                                                                                            |
| `role`                                                                                                | [operations.ListCreatorsRole](../../models/operations/list-creators-role.md)                          | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `roles`                                                                                               | [operations.ListCreatorsRole](../../models/operations/list-creators-role.md)[]                        | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `photoUrl`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | https://...-full_lg.webp                                                                              |
| `images`                                                                                              | [operations.ListCreatorsImages](../../models/operations/list-creators-images.md)                      | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `nameI18n`                                                                                            | Record<string, [operations.ListCreatorsNameI18n](../../models/operations/list-creators-name-i18n.md)> | :heavy_check_mark:                                                                                    | One name per language, keyed by BCP 47 tag.                                                           | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}           |
| `aliasesI18n`                                                                                         | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | Alternative names per language.                                                                       | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                       |
| `originalLocale`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | The language the entity is from, a BCP 47 tag.                                                        | en                                                                                                    |