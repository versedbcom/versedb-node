# ListComicShopsData

## Example Usage

```typescript
import { ListComicShopsData } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsData = {
  id: 42,
  name: "Midtown Comics",
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
  city: "New York",
  stateProvince: "NY",
  country: "United States",
  countryCode: "US",
  logoUrl: "https://...-tile_sm.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    fullLg: "https://...-full_lg.webp",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | 42                                                                                                         |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | Midtown Comics                                                                                             |
| `nameI18n`                                                                                                 | Record<string, [operations.ListComicShopsNameI18n](../../models/operations/list-comic-shops-name-i18n.md)> | :heavy_check_mark:                                                                                         | One name per language, keyed by BCP 47 tag.                                                                | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                |
| `aliasesI18n`                                                                                              | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | Alternative names per language.                                                                            | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                            |
| `originalLocale`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The language the entity is from, a BCP 47 tag.                                                             | en                                                                                                         |
| `city`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | New York                                                                                                   |
| `stateProvince`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | NY                                                                                                         |
| `country`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | United States                                                                                              |
| `countryCode`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | US                                                                                                         |
| `logoUrl`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | https://...-tile_sm.webp                                                                                   |
| `images`                                                                                                   | [operations.ListComicShopsImages](../../models/operations/list-comic-shops-images.md)                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |