# ListImprintsResponseBody

Success

## Example Usage

```typescript
import { ListImprintsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListImprintsResponseBody = {
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
    path: "/boot",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.ListImprintsData](../../models/operations/list-imprints-data.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `links`                                                                        | [operations.ListImprintsLinks](../../models/operations/list-imprints-links.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `meta`                                                                         | [operations.ListImprintsMeta](../../models/operations/list-imprints-meta.md)   | :heavy_check_mark:                                                             | N/A                                                                            |