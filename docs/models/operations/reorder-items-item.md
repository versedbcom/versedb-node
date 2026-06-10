# ReorderItemsItem

## Example Usage

```typescript
import { ReorderItemsItem } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsItem = {
  id: 503,
  position: 1,
  note: null,
  entityType: "issues",
  entity: {
    id: 5432,
    name: "The Amazing Spider-Man #1",
    issueNumber: "1",
    imageUrl: "https://...",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 503                                                                              |
| `position`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 1                                                                                |
| `note`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | null                                                                             |
| `entityType`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | issues                                                                           |
| `entity`                                                                         | [operations.ReorderItemsEntity](../../models/operations/reorder-items-entity.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |