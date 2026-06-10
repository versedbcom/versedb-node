# AddItemToListResponseBody

Added

## Example Usage

```typescript
import { AddItemToListResponseBody } from "@versedbcom/sdk/models/operations";

let value: AddItemToListResponseBody = {
  data: {
    id: 501,
    position: 1,
    note: "My favorite issue!",
    listable: {
      id: 5432,
      number: "1",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.AddItemToListData](../../models/operations/add-item-to-list-data.md) | :heavy_minus_sign:                                                               | N/A                                                                              |