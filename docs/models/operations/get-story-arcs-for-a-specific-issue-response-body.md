# GetStoryArcsForASpecificIssueResponseBody

Success

## Example Usage

```typescript
import { GetStoryArcsForASpecificIssueResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificIssueResponseBody = {
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
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                | [operations.GetStoryArcsForASpecificIssueData](../../models/operations/get-story-arcs-for-a-specific-issue-data.md)[] | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `links`                                                                                                               | [operations.GetStoryArcsForASpecificIssueLinks](../../models/operations/get-story-arcs-for-a-specific-issue-links.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `meta`                                                                                                                | [operations.GetStoryArcsForASpecificIssueMeta](../../models/operations/get-story-arcs-for-a-specific-issue-meta.md)   | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |