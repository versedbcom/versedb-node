# ReorderItemsRequest

## Example Usage

```typescript
import { ReorderItemsRequest } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsRequest = {
  listId: 101,
  body: {
    itemIds: [
      503,
      501,
      502,
    ],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `listId`                                                                                    | *number*                                                                                    | :heavy_check_mark:                                                                          | The list ID.                                                                                | 101                                                                                         |
| `body`                                                                                      | [operations.ReorderItemsRequestBody](../../models/operations/reorder-items-request-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |