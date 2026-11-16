# GetPullListIssueCoversResponseBody

Success

## Example Usage

```typescript
import { GetPullListIssueCoversResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetPullListIssueCoversResponseBody = {
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
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [operations.GetPullListIssueCoversData](../../models/operations/get-pull-list-issue-covers-data.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |