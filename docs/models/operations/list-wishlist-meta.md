# ListWishlistMeta

## Example Usage

```typescript
import { ListWishlistMeta } from "@versedbcom/sdk/models/operations";

let value: ListWishlistMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://forceful-minister.name/",
      label: "<value>",
      active: true,
    },
  ],
  path: "/opt/lib",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `currentPage`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 1                                                                              |
| `from`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 1                                                                              |
| `lastPage`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 25                                                                             |
| `links`                                                                        | [operations.ListWishlistLink](../../models/operations/list-wishlist-link.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `path`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `perPage`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 20                                                                             |
| `to`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 20                                                                             |
| `total`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 500                                                                            |