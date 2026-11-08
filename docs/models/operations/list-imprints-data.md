# ListImprintsData

## Example Usage

```typescript
import { ListImprintsData } from "@versedbcom/sdk/models/operations";

let value: ListImprintsData = {
  id: 7,
  name: "Vertigo",
  slug: "vertigo",
  publisher: {
    id: 2,
    name: "DC Comics",
    slug: "dc-comics",
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
| `id`                                                                                                  | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 7                                                                                                     |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | Vertigo                                                                                               |
| `slug`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | vertigo                                                                                               |
| `publisher`                                                                                           | [operations.ListImprintsPublisher](../../models/operations/list-imprints-publisher.md)                | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `nameI18n`                                                                                            | Record<string, [operations.ListImprintsNameI18n](../../models/operations/list-imprints-name-i18n.md)> | :heavy_check_mark:                                                                                    | One name per language, keyed by BCP 47 tag.                                                           | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}           |
| `aliasesI18n`                                                                                         | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | Alternative names per language.                                                                       | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                       |
| `originalLocale`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | The language the imprint is from, a BCP 47 tag.                                                       | en                                                                                                    |