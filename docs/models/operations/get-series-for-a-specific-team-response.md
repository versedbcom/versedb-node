# GetSeriesForASpecificTeamResponse

## Example Usage

```typescript
import { GetSeriesForASpecificTeamResponse } from "@versedbcom/sdk/models/operations";

let value: GetSeriesForASpecificTeamResponse = {
  headers: {
    "key": [],
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
      links: [],
      path: "/private/tmp",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                   | Record<string, *string*[]>                                                                                                  | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `result`                                                                                                                    | [operations.GetSeriesForASpecificTeamResponseBody](../../models/operations/get-series-for-a-specific-team-response-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |