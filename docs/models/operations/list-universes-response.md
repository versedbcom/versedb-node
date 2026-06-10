# ListUniversesResponse

## Example Usage

```typescript
import { ListUniversesResponse } from "@versedbcom/sdk/models/operations";

let value: ListUniversesResponse = {
  headers: {
    "key": [],
  },
  result: {
    data: [
      {
        id: 1,
        name: "Marvel Universe (616)",
      },
    ],
    meta: {
      currentPage: 1,
      lastPage: 3,
      perPage: 20,
      total: 42,
    },
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                | Record<string, *string*[]>                                                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |
| `result`                                                                                                                                 | [operations.ListUniversesResponseBody](../../models/operations/list-universes-response-body.md)                                          | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      | {<br/>"data": [<br/>{<br/>"id": 1,<br/>"name": "Marvel Universe (616)"<br/>}<br/>],<br/>"meta": {<br/>"current_page": 1,<br/>"last_page": 3,<br/>"per_page": 20,<br/>"total": 42<br/>}<br/>} |