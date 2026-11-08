# GetCreatorsIssuesResponseBody

Success

## Example Usage

```typescript
import { GetCreatorsIssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsIssuesResponseBody = {
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
    path: "/usr/libexec",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.GetCreatorsIssuesData](../../models/operations/get-creators-issues-data.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `links`                                                                                   | [operations.GetCreatorsIssuesLinks](../../models/operations/get-creators-issues-links.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `meta`                                                                                    | [operations.GetCreatorsIssuesMeta](../../models/operations/get-creators-issues-meta.md)   | :heavy_check_mark:                                                                        | N/A                                                                                       |