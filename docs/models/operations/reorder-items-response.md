# ReorderItemsResponse

## Example Usage

```typescript
import { ReorderItemsResponse } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    message: "Items reordered successfully.",
    items: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [operations.ReorderItemsResponseBody](../../models/operations/reorder-items-response-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |