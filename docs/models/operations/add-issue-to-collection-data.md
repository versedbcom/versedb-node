# AddIssueToCollectionData

## Example Usage

```typescript
import { AddIssueToCollectionData } from "@versedbcom/sdk/models/operations";

let value: AddIssueToCollectionData = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 1001                                                                                               |
| `issue`                                                                                            | [operations.AddIssueToCollectionIssue](../../models/operations/add-issue-to-collection-issue.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `series`                                                                                           | [operations.AddIssueToCollectionSeries](../../models/operations/add-issue-to-collection-series.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `variantId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | null                                                                                               |
| `condition`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | NM                                                                                                 |
| `pricePaid`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 4.99                                                                                               |
| `notes`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | First print, signed                                                                                |