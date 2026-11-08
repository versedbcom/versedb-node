# GetImprintDetailsData

## Example Usage

```typescript
import { GetImprintDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetImprintDetailsData = {
  id: 1,
  name: "Vertigo",
  slug: "vertigo",
  publisher: {
    id: 2,
    name: "DC Comics",
    slug: "dc-comics",
  },
  seriesCount: 240,
  titlesCount: 180,
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
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
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 1                                                                                                                |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | Vertigo                                                                                                          |
| `slug`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | vertigo                                                                                                          |
| `publisher`                                                                                                      | [operations.GetImprintDetailsPublisher](../../models/operations/get-imprint-details-publisher.md)                | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `seriesCount`                                                                                                    | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 240                                                                                                              |
| `titlesCount`                                                                                                    | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 180                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 2024-01-15T10:30:00.000000Z                                                                                      |
| `updatedAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 2024-01-15T10:30:00.000000Z                                                                                      |
| `nameI18n`                                                                                                       | Record<string, [operations.GetImprintDetailsNameI18n](../../models/operations/get-imprint-details-name-i18n.md)> | :heavy_check_mark:                                                                                               | One name per language, keyed by BCP 47 tag.                                                                      | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                      |
| `aliasesI18n`                                                                                                    | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | Alternative names per language.                                                                                  | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                  |
| `originalLocale`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The language the imprint is from, a BCP 47 tag.                                                                  | en                                                                                                               |