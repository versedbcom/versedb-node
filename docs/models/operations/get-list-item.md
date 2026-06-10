# GetListItem

## Example Usage

```typescript
import { GetListItem } from "@versedbcom/sdk/models/operations";

let value: GetListItem = {
  id: 1,
  position: 1,
  note: "Classic!",
  listable: {
    id: 5432,
    number: "1",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 1                                                                          |
| `position`                                                                 | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 1                                                                          |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | Classic!                                                                   |
| `listable`                                                                 | [operations.GetListListable](../../models/operations/get-list-listable.md) | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |