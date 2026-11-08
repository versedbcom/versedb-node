# ListAllPublishersWithOptionalSearchResponseBody

Success

## Example Usage

```typescript
import { ListAllPublishersWithOptionalSearchResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListAllPublishersWithOptionalSearchResponseBody = {
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
        url: "https://mature-disposer.com/",
        label: "<value>",
        active: false,
      },
    ],
    path: "/boot/defaults",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                           | [operations.ListAllPublishersWithOptionalSearchData](../../models/operations/list-all-publishers-with-optional-search-data.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `links`                                                                                                                          | [operations.ListAllPublishersWithOptionalSearchLinks](../../models/operations/list-all-publishers-with-optional-search-links.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `meta`                                                                                                                           | [operations.ListAllPublishersWithOptionalSearchMeta](../../models/operations/list-all-publishers-with-optional-search-meta.md)   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |