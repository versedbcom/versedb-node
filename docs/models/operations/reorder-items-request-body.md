# ReorderItemsRequestBody

## Example Usage

```typescript
import { ReorderItemsRequestBody } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsRequestBody = {
  itemIds: [
    503,
    501,
    502,
  ],
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `itemIds`                           | *number*[]                          | :heavy_check_mark:                  | Array of item IDs in desired order. | [<br/>503,<br/>501,<br/>502<br/>]   |