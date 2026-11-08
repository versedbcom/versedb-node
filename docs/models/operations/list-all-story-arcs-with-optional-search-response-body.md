# ListAllStoryArcsWithOptionalSearchResponseBody

Success

## Example Usage

```typescript
import { ListAllStoryArcsWithOptionalSearchResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListAllStoryArcsWithOptionalSearchResponseBody = {
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
        url: "https://cautious-freight.info",
        label: "<value>",
        active: false,
      },
    ],
    path: "/sbin",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                          | [operations.ListAllStoryArcsWithOptionalSearchData](../../models/operations/list-all-story-arcs-with-optional-search-data.md)[] | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `links`                                                                                                                         | [operations.ListAllStoryArcsWithOptionalSearchLinks](../../models/operations/list-all-story-arcs-with-optional-search-links.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `meta`                                                                                                                          | [operations.ListAllStoryArcsWithOptionalSearchMeta](../../models/operations/list-all-story-arcs-with-optional-search-meta.md)   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |