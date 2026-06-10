# AddItemToListRequest

## Example Usage

```typescript
import { AddItemToListRequest } from "@versedbcom/sdk/models/operations";

let value: AddItemToListRequest = {
  listId: 101,
  body: {
    entityId: 5432,
    position: 1,
    note: "My favorite issue!",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `listId`                                                                                        | *number*                                                                                        | :heavy_check_mark:                                                                              | The list ID.                                                                                    | 101                                                                                             |
| `body`                                                                                          | [operations.AddItemToListRequestBody](../../models/operations/add-item-to-list-request-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |