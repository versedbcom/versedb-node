# GetActivityFeedResponse

## Example Usage

```typescript
import { GetActivityFeedResponse } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedResponse = {
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
    data: [],
    meta: {
      currentPage: 1,
      perPage: 20,
      total: 0,
      lastPage: 0,
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `result`                                                                                             | [operations.GetActivityFeedResponseBody](../../models/operations/get-activity-feed-response-body.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  | {<br/>"data": [],<br/>"meta": {<br/>"current_page": 1,<br/>"per_page": 20,<br/>"total": 0,<br/>"last_page": 0<br/>}<br/>} |