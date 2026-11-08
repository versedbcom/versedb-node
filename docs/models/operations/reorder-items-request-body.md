# ReorderItemsRequestBody

## Example Usage

```typescript
import { ReorderItemsRequestBody } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsRequestBody = {
  itemIds: [
    3,
    1,
    2,
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `itemIds`                                                                                                          | *number*[]                                                                                                         | :heavy_check_mark:                                                                                                 | An ordered array of list item IDs representing the new order. All IDs must belong to this list with no duplicates. | [<br/>3,<br/>1,<br/>2<br/>]                                                                                        |