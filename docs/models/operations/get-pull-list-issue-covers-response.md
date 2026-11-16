# GetPullListIssueCoversResponse

## Example Usage

```typescript
import { GetPullListIssueCoversResponse } from "@versedbcom/sdk/models/operations";

let value: GetPullListIssueCoversResponse = {
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
    data: {
      issueId: 5432,
      seriesId: 456,
      skipped: true,
      linkedShops: [
        {
          name: "Third Eye Comics",
          order: "open",
        },
      ],
      linkedShop: "Third Eye Comics",
      shopOrder: "open",
      options: [],
      followsSeries: true,
      standing: "standard",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                            | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `result`                                                                                                             | [operations.GetPullListIssueCoversResponseBody](../../models/operations/get-pull-list-issue-covers-response-body.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |