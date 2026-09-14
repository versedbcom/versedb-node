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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 7                                                                                      |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | Vertigo                                                                                |
| `slug`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | vertigo                                                                                |
| `publisher`                                                                            | [operations.ListImprintsPublisher](../../models/operations/list-imprints-publisher.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |