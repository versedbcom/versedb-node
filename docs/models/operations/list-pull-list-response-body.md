# ListPullListResponseBody

Success

## Example Usage

```typescript
import { ListPullListResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListPullListResponseBody = {
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
    path: "/Network",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [operations.ListPullListData](../../models/operations/list-pull-list-data.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `links`                                                                         | [operations.ListPullListLinks](../../models/operations/list-pull-list-links.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `meta`                                                                          | [operations.ListPullListMeta](../../models/operations/list-pull-list-meta.md)   | :heavy_check_mark:                                                              | N/A                                                                             |