# SetPullListIssueCoversData

## Example Usage

```typescript
import { SetPullListIssueCoversData } from "@versedbcom/sdk/models/operations";

let value: SetPullListIssueCoversData = {
  issueId: 5432,
  seriesId: 456,
  skipped: false,
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
      coverNsfw: false,
      selected: true,
    },
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                                 | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | 5432                                                                                                      |
| `seriesId`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | 456                                                                                                       |
| `skipped`                                                                                                 | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | The issue is skipped; saving covers adds it back to the pull.                                             |                                                                                                           |
| `linkedShop`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The linked Retail shop the series comes from, whose box follows the shop's own list; null without one.    | Third Eye Comics                                                                                          |
| `options`                                                                                                 | [operations.SetPullListIssueCoversOption](../../models/operations/set-pull-list-issue-covers-option.md)[] | :heavy_check_mark:                                                                                        | The main cover first, then regular covers, ratio covers and exclusives.                                   |                                                                                                           |