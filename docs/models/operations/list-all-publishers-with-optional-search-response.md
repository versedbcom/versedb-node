# ListAllPublishersWithOptionalSearchResponse

## Example Usage

```typescript
import { ListAllPublishersWithOptionalSearchResponse } from "@versedbcom/sdk/models/operations";

let value: ListAllPublishersWithOptionalSearchResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
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
          url: "https://mature-disposer.com/",
          label: "<value>",
          active: false,
        },
      ],
      path: "/boot/defaults",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                       | Record<string, *string*[]>                                                                                                                      | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `result`                                                                                                                                        | [operations.ListAllPublishersWithOptionalSearchResponseBody](../../models/operations/list-all-publishers-with-optional-search-response-body.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |