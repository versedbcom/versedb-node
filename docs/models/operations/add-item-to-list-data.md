# AddItemToListData

## Example Usage

```typescript
import { AddItemToListData } from "@versedbcom/sdk/models/operations";

let value: AddItemToListData = {
  id: 501,
  position: 1,
  note: "My favorite issue!",
  listable: {
    id: 5432,
    number: "1",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 501                                                                                      |
| `position`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 1                                                                                        |
| `note`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | My favorite issue!                                                                       |
| `listable`                                                                               | [operations.AddItemToListListable](../../models/operations/add-item-to-list-listable.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |