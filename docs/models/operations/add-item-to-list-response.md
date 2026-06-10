# AddItemToListResponse

## Example Usage

```typescript
import { AddItemToListResponse } from "@versedbcom/sdk/models/operations";

let value: AddItemToListResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      id: 501,
      position: 1,
      note: "My favorite issue!",
      listable: {
        id: 5432,
        number: "1",
      },
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `result`                                                                                                          | [operations.AddItemToListResponseBody](../../models/operations/add-item-to-list-response-body.md)                 | :heavy_check_mark:                                                                                                | N/A                                                                                                               | {<br/>"data": {<br/>"id": 501,<br/>"position": 1,<br/>"note": "My favorite issue!",<br/>"listable": {<br/>"id": 5432,<br/>"number": "1"<br/>}<br/>}<br/>} |