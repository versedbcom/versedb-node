# GetUsersListsResponse

## Example Usage

```typescript
import { GetUsersListsResponse } from "@versedbcom/sdk/models/operations";

let value: GetUsersListsResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [operations.GetUsersListsResponseBody](../../models/operations/get-users-lists-response-body.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |