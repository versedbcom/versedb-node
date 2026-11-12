# ListFollowsResponseBody

Success

## Example Usage

```typescript
import { ListFollowsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListFollowsResponseBody = {
  data: [],
  links: {
    first: "<value>",
    last: "<value>",
    prev: "<value>",
    next: null,
  },
  meta: {
    currentPage: 1,
    from: 1,
    lastPage: 25,
    links: [],
    path: "/opt/sbin",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.ListFollowsData](../../models/operations/list-follows-data.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `links`                                                                      | [operations.ListFollowsLinks](../../models/operations/list-follows-links.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `meta`                                                                       | [operations.ListFollowsMeta](../../models/operations/list-follows-meta.md)   | :heavy_check_mark:                                                           | N/A                                                                          |