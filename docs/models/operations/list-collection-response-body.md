# ListCollectionResponseBody

Success

## Example Usage

```typescript
import { ListCollectionResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListCollectionResponseBody = {
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
    links: [
      {
        url: "https://regular-gripper.net/",
        label: "<value>",
        active: false,
      },
    ],
    path: "/etc/namedb",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.ListCollectionData](../../models/operations/list-collection-data.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `links`                                                                            | [operations.ListCollectionLinks](../../models/operations/list-collection-links.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `meta`                                                                             | [operations.ListCollectionMeta](../../models/operations/list-collection-meta.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |