# ListSeriesResponseBody

Success

## Example Usage

```typescript
import { ListSeriesResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListSeriesResponseBody = {
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
    path: "/tmp",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [operations.ListSeriesData](../../models/operations/list-series-data.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `links`                                                                    | [operations.ListSeriesLinks](../../models/operations/list-series-links.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `meta`                                                                     | [operations.ListSeriesMeta](../../models/operations/list-series-meta.md)   | :heavy_check_mark:                                                         | N/A                                                                        |