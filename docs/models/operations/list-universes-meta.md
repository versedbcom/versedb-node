# ListUniversesMeta

## Example Usage

```typescript
import { ListUniversesMeta } from "@versedbcom/sdk/models/operations";

let value: ListUniversesMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://cute-convection.info/",
      label: "<value>",
      active: true,
    },
  ],
  path: "/opt/share",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `currentPage`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `from`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `lastPage`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 25                                                                               |
| `links`                                                                          | [operations.ListUniversesLink](../../models/operations/list-universes-link.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `path`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `perPage`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 20                                                                               |
| `to`                                                                             | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 20                                                                               |
| `total`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 500                                                                              |