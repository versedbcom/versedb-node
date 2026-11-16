# SetPullListIssueCoversResponse

## Example Usage

```typescript
import { SetPullListIssueCoversResponse } from "@versedbcom/sdk/models/operations";

let value: SetPullListIssueCoversResponse = {
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
  },
  result: {
    data: {
      issueId: 5432,
      seriesId: 456,
      skipped: false,
      linkedShops: [
        {
          name: "Third Eye Comics",
          order: "open",
        },
      ],
      linkedShop: "Third Eye Comics",
      shopOrder: "open",
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
      followsSeries: false,
      standing: "standard",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                            | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `result`                                                                                                             | [operations.SetPullListIssueCoversResponseBody](../../models/operations/set-pull-list-issue-covers-response-body.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |