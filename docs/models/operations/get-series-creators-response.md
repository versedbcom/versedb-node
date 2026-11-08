# GetSeriesCreatorsResponse

## Example Usage

```typescript
import { GetSeriesCreatorsResponse } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCreatorsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    currentPage: 1,
    data: [],
    firstPageUrl: "https://polite-gray.com/",
    from: 1,
    lastPage: 1,
    lastPageUrl: "https://live-sundae.net/",
    links: [
      {
        url: "https://infatuated-knuckle.org",
        label: "<value>",
        active: true,
      },
    ],
    nextPageUrl: "https://impolite-instance.org",
    path: "/mnt",
    perPage: 50,
    prevPageUrl: "https://unlined-reasoning.com/",
    to: 15,
    total: 15,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.GetSeriesCreatorsResponseBody](../../models/operations/get-series-creators-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |