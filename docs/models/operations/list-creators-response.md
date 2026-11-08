# ListCreatorsResponse

## Example Usage

```typescript
import { ListCreatorsResponse } from "@versedbcom/sdk/models/operations";

let value: ListCreatorsResponse = {
  headers: {},
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
      links: [],
      path: "/Network",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [operations.ListCreatorsResponseBody](../../models/operations/list-creators-response-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |