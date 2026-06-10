# GetSeriesCreatorsResponse

## Example Usage

```typescript
import { GetSeriesCreatorsResponse } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCreatorsResponse = {
  headers: {},
  result: {
    data: [
      {
        id: 789,
        name: "Nick Spencer",
        role: {
          id: 1,
          name: "Writer",
        },
      },
    ],
    meta: {
      currentPage: 1,
      lastPage: 1,
      perPage: 50,
      total: 15,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                | Record<string, *string*[]>                                                                                                                                               | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `result`                                                                                                                                                                 | [operations.GetSeriesCreatorsResponseBody](../../models/operations/get-series-creators-response-body.md)                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      | {<br/>"data": [<br/>{<br/>"id": 789,<br/>"name": "Nick Spencer",<br/>"role": {<br/>"id": 1,<br/>"name": "Writer"<br/>}<br/>}<br/>],<br/>"meta": {<br/>"current_page": 1,<br/>"last_page": 1,<br/>"per_page": 50,<br/>"total": 15<br/>}<br/>} |