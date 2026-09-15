# ReorderItemsRequestBody

## Example Usage

```typescript
import { ReorderItemsRequestBody } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsRequestBody = {
  itemIds: [
    3,
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `itemIds`                                                                                  | *number*[]                                                                                 | :heavy_check_mark:                                                                         | The list item IDs in their new order. All IDs must belong to this list with no duplicates. | [<br/>3<br/>]                                                                              |