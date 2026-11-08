# GetUsersListsResponseBody

Success

## Example Usage

```typescript
import { GetUsersListsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetUsersListsResponseBody = {
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
        url: "https://gummy-trash.info",
        label: "<value>",
        active: true,
      },
    ],
    path: "/usr/include",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [operations.GetUsersListsData](../../models/operations/get-users-lists-data.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |
| `links`                                                                           | [operations.GetUsersListsLinks](../../models/operations/get-users-lists-links.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `meta`                                                                            | [operations.GetUsersListsMeta](../../models/operations/get-users-lists-meta.md)   | :heavy_check_mark:                                                                | N/A                                                                               |