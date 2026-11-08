# BrowseListsResponseBody

Success

## Example Usage

```typescript
import { BrowseListsResponseBody } from "@versedbcom/sdk/models/operations";

let value: BrowseListsResponseBody = {
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
        url: "https://wry-republican.org",
        label: "<value>",
        active: true,
      },
    ],
    path: "/proc",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.BrowseListsData](../../models/operations/browse-lists-data.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `links`                                                                      | [operations.BrowseListsLinks](../../models/operations/browse-lists-links.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `meta`                                                                       | [operations.BrowseListsMeta](../../models/operations/browse-lists-meta.md)   | :heavy_check_mark:                                                           | N/A                                                                          |