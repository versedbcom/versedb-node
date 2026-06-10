# UpdateListResponse

## Example Usage

```typescript
import { UpdateListResponse } from "@versedbcom/sdk/models/operations";

let value: UpdateListResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: 101,
      title: "Updated Title",
      description: "Updated description",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `result`                                                                                  | [operations.UpdateListResponseBody](../../models/operations/update-list-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       | {<br/>"data": {<br/>"id": 101,<br/>"title": "Updated Title",<br/>"description": "Updated description"<br/>}<br/>} |