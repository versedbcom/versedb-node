# GetSeriesIssuesResponse

## Example Usage

```typescript
import { GetSeriesIssuesResponse } from "@versedbcom/sdk/models/operations";

let value: GetSeriesIssuesResponse = {
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
    links: {
      first: "<value>",
      last: "<value>",
      prev: "<value>",
      next: "<value>",
    },
    meta: {
      currentPage: 1,
      from: 1,
      lastPage: 25,
      links: [
        {
          url: "https://impressionable-agreement.biz",
          label: "<value>",
          active: true,
        },
      ],
      path: "/etc",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [operations.GetSeriesIssuesResponseBody](../../models/operations/get-series-issues-response-body.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |