# ListIssuesResponse

## Example Usage

```typescript
import { ListIssuesResponse } from "@versedbcom/sdk/models/operations";

let value: ListIssuesResponse = {
  headers: {
    "key": [
      "<value 1>",
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
          url: "https://linear-injunction.net/",
          label: "<value>",
          active: true,
        },
      ],
      path: "/opt/sbin",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.ListIssuesResponseBody](../../models/operations/list-issues-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |