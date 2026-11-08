# ListIssuesResponseBody

Success

## Example Usage

```typescript
import { ListIssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListIssuesResponseBody = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [operations.ListIssuesData](../../models/operations/list-issues-data.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `links`                                                                    | [operations.ListIssuesLinks](../../models/operations/list-issues-links.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `meta`                                                                     | [operations.ListIssuesMeta](../../models/operations/list-issues-meta.md)   | :heavy_check_mark:                                                         | N/A                                                                        |