# Upcoming1IssuesResponse

## Example Usage

```typescript
import { Upcoming1IssuesResponse } from "@versedbcom/sdk/models/operations";

let value: Upcoming1IssuesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [],
    meta: {
      currentPage: 1,
      perPage: 10,
      total: 28,
      lastPage: 3,
      lookaheadDays: 60,
      windowStart: "2026-03-15",
      windowEnd: "2026-05-14",
    },
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `result`                                                                                            | [operations.Upcoming1IssuesResponseBody](../../models/operations/upcoming1-issues-response-body.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |