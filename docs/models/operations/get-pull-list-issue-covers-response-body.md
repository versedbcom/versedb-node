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
    linkedShop: "Third Eye Comics",
    options: [
      {
        variantId: 789,
        code: "B",
        name: "Cover B Jock Variant",
        type: "cover_variant",
        ratio: "1:25",
        kind: "regular",
        images: {
          thumb: "https://...-thumb.webp",
          coverSm: "https://...-cover_sm.webp",
          coverMd: "https://...-cover_md.webp",
          coverLg: "https://...-cover_lg.webp",
        },
        price: "4.99",
        priceFromIssue: true,
        currency: "USD",
        coverNsfw: true,
        selected: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [operations.GetPullListIssueCoversData](../../models/operations/get-pull-list-issue-covers-data.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |