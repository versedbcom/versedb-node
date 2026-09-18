# AddIssueToCollectionResponseBody

Added

## Example Usage

```typescript
import { AddIssueToCollectionResponseBody } from "@versedbcom/sdk/models/operations";

let value: AddIssueToCollectionResponseBody = {
  data: {
    id: 1001,
    issue: {
      id: 5432,
      number: "1",
      title: "First Issue",
    },
    series: {
      id: 123,
      name: "Amazing Spider-Man",
    },
    variantId: null,
    condition: "NM",
    pricePaid: 4.99,
    notes: "First print, signed",
  },
  wasOnWishlist: true,
  followUp: {
    prompt: true,
    canMarkRead: true,
    canReview: true,
    hasReview: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.AddIssueToCollectionData](../../models/operations/add-issue-to-collection-data.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `wasOnWishlist`                                                                                | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            | true                                                                                           |
| `followUp`                                                                                     | [operations.FollowUp](../../models/operations/follow-up.md)                                    | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |