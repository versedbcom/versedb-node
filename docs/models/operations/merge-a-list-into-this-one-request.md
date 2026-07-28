# MergeAListIntoThisOneRequest

## Example Usage

```typescript
import { MergeAListIntoThisOneRequest } from "@versedbcom/sdk/models/operations";

let value: MergeAListIntoThisOneRequest = {
  listId: 101,
  body: {
    sourceListId: 207,
    deleteSource: false,
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `listId`                                                                                                          | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The destination list ID.                                                                                          | 101                                                                                                               |
| `body`                                                                                                            | [operations.MergeAListIntoThisOneRequestBody](../../models/operations/merge-a-list-into-this-one-request-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |