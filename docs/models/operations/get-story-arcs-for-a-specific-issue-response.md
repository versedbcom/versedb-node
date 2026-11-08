# GetStoryArcsForASpecificIssueResponse

## Example Usage

```typescript
import { GetStoryArcsForASpecificIssueResponse } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificIssueResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
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
      links: [],
      path: "/Library",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                            | Record<string, *string*[]>                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `result`                                                                                                                             | [operations.GetStoryArcsForASpecificIssueResponseBody](../../models/operations/get-story-arcs-for-a-specific-issue-response-body.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |