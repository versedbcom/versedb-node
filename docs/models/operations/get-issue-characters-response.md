# GetIssueCharactersResponse

## Example Usage

```typescript
import { GetIssueCharactersResponse } from "@versedbcom/sdk/models/operations";

let value: GetIssueCharactersResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    currentPage: 1,
    data: [],
    firstPageUrl: "https://decisive-plain.biz",
    from: 1,
    lastPage: 1,
    lastPageUrl: "https://rewarding-doorpost.com/",
    links: [
      {
        url: "https://excellent-sushi.com",
        label: "<value>",
        active: false,
      },
    ],
    nextPageUrl: "https://political-soup.info/",
    path: "/sys",
    perPage: 50,
    prevPageUrl: "https://new-pupil.net/",
    to: 15,
    total: 15,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [operations.GetIssueCharactersResponseBody](../../models/operations/get-issue-characters-response-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |