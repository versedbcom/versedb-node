# ListImprintsData

## Example Usage

```typescript
import { ListImprintsData } from "@versedbcom/sdk/models/operations";

let value: ListImprintsData = {
  id: 7,
  name: "Vertigo",
  slug: "vertigo",
  description:
    "DC's mature readers imprint, home to Sandman, Preacher, and Y: The Last Man.",
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
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | DC's mature readers imprint, home to Sandman, Preacher, and Y: The Last Man.           |
| `publisher`                                                                            | [operations.ListImprintsPublisher](../../models/operations/list-imprints-publisher.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |