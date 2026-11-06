# ListImprintsData

## Example Usage

```typescript
import { ListImprintsData } from "@versedbcom/sdk/models/operations";

let value: ListImprintsData = {
  id: 7,
  name: "Vertigo",
  originalLocale: "en",
  slug: "vertigo",
  publisher: {
    id: 2,
    name: "DC Comics",
    slug: "dc-comics",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 7                                                                                           |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Vertigo                                                                                     |
| `nameI18n`                                                                                  | [operations.ListImprintsNameI18n](../../models/operations/list-imprints-name-i18n.md)       | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `aliasesI18n`                                                                               | [operations.ListImprintsAliasesI18n](../../models/operations/list-imprints-aliases-i18n.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `originalLocale`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | en                                                                                          |
| `slug`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | vertigo                                                                                     |
| `publisher`                                                                                 | [operations.ListImprintsPublisher](../../models/operations/list-imprints-publisher.md)      | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |