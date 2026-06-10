# GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewMeta

## Example Usage

```typescript
import { GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewMeta } from "@versedbcom/sdk/models/operations";

let value: GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewMeta = {
  issueId: 5432,
  estimatedRawValue: "42.10",
  estimated98Value: "145.50",
  priceEstimates: {
    low: 30,
    mid: 93.8,
    high: 180,
  },
  priceTrend: "4.25",
  isPro: true,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `issueId`                                                               | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 5432                                                                    |
| `estimatedRawValue`                                                     | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 42.10                                                                   |
| `estimated98Value`                                                      | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 145.50                                                                  |
| `priceEstimates`                                                        | [operations.PriceEstimates](../../models/operations/price-estimates.md) | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `priceTrend`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 4.25                                                                    |
| `isPro`                                                                 | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     | true                                                                    |