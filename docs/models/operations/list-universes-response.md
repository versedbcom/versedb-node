# ListUniversesResponse

## Example Usage

```typescript
import { ListUniversesResponse } from "@versedbcom/sdk/models/operations";

let value: ListUniversesResponse = {
  headers: {},
  result: {
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
      links: [],
      path: "/proc",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [operations.ListUniversesResponseBody](../../models/operations/list-universes-response-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |