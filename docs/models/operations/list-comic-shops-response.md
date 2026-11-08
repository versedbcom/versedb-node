# ListComicShopsResponse

## Example Usage

```typescript
import { ListComicShopsResponse } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [],
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
          url: "https://cooperative-wear.net",
          label: "<value>",
          active: true,
        },
      ],
      path: "/Users",
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
| `result`                                                                                           | [operations.ListComicShopsResponseBody](../../models/operations/list-comic-shops-response-body.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |