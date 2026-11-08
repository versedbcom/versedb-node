# ListReadStatusResponse

## Example Usage

```typescript
import { ListReadStatusResponse } from "@versedbcom/sdk/models/operations";

let value: ListReadStatusResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
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
          url: "https://babyish-chow.biz",
          label: "<value>",
          active: false,
        },
      ],
      path: "/etc/ppp",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [operations.ListReadStatusResponseBody](../../models/operations/list-read-status-response-body.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |