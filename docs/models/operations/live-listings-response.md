# LiveListingsResponse

## Example Usage

```typescript
import { LiveListingsResponse } from "@versedbcom/sdk/models/operations";

let value: LiveListingsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [
      {
        source: "ebay",
        title: "Amazing Spider-Man #1 CGC 9.8",
        price: 150,
      },
    ],
    meta: {
      issueId: 5432,
      total: 15,
      cached: true,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |                                                                                                                                                                       |
| `result`                                                                                                                                                              | [operations.LiveListingsResponseBody](../../models/operations/live-listings-response-body.md)                                                                         | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   | {<br/>"data": [<br/>{<br/>"source": "ebay",<br/>"title": "Amazing Spider-Man #1 CGC 9.8",<br/>"price": 150,<br/>"url": "..."<br/>}<br/>],<br/>"meta": {<br/>"issue_id": 5432,<br/>"total": 15,<br/>"cached": true<br/>}<br/>} |