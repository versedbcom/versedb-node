# ListUniversesResponseBody

Success

## Example Usage

```typescript
import { ListUniversesResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListUniversesResponseBody = {
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
    path: "/proc",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.ListUniversesData](../../models/operations/list-universes-data.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `links`                                                                          | [operations.ListUniversesLinks](../../models/operations/list-universes-links.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `meta`                                                                           | [operations.ListUniversesMeta](../../models/operations/list-universes-meta.md)   | :heavy_check_mark:                                                               | N/A                                                                              |