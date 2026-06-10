# UpdateCollectionItemResponse

## Example Usage

```typescript
import { UpdateCollectionItemResponse } from "@versedbcom/sdk/models/operations";

let value: UpdateCollectionItemResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: 1001,
      condition: "NM",
      pricePaid: 4.99,
      graded: true,
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `result`                                                                                                       | [operations.UpdateCollectionItemResponseBody](../../models/operations/update-collection-item-response-body.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            | {<br/>"data": {<br/>"id": 1001,<br/>"condition": "NM",<br/>"price_paid": 4.99,<br/>"graded": true<br/>}<br/>}  |