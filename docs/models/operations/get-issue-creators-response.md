# GetIssueCreatorsResponse

## Example Usage

```typescript
import { GetIssueCreatorsResponse } from "@versedbcom/sdk/models/operations";

let value: GetIssueCreatorsResponse = {
  headers: {},
  result: {
    currentPage: 1,
    data: [],
    firstPageUrl: "https://stingy-mountain.net/",
    from: 1,
    lastPage: 1,
    lastPageUrl: "https://unwilling-chops.biz",
    links: [
      {
        url: "https://reflecting-beret.com/",
        label: "<value>",
        active: false,
      },
    ],
    nextPageUrl: "https://dark-noon.net/",
    path: "/etc/defaults",
    perPage: 50,
    prevPageUrl: "https://brisk-retrospectivity.com/",
    to: 15,
    total: 15,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [operations.GetIssueCreatorsResponseBody](../../models/operations/get-issue-creators-response-body.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |