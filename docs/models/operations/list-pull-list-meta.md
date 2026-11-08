# ListPullListMeta

## Example Usage

```typescript
import { ListPullListMeta } from "@versedbcom/sdk/models/operations";

let value: ListPullListMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://dependable-draw.name/",
      label: "<value>",
      active: true,
    },
  ],
  path: "/usr/X11R6",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `currentPage`                                                                   | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 1                                                                               |
| `from`                                                                          | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 1                                                                               |
| `lastPage`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 25                                                                              |
| `links`                                                                         | [operations.ListPullListLink](../../models/operations/list-pull-list-link.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `path`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `perPage`                                                                       | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 20                                                                              |
| `to`                                                                            | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 20                                                                              |
| `total`                                                                         | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 500                                                                             |