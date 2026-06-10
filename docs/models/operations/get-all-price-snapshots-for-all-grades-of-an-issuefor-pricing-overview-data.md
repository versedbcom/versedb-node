# GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewData

## Example Usage

```typescript
import { GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewData } from "@versedbcom/sdk/models/operations";

let value: GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewData = {
  gradeType: "raw",
  gradeValue: null,
  gradeDisplay: "Raw",
  avgPriceUsd: "42.10",
  minPriceUsd: "30.00",
  maxPriceUsd: "55.00",
  medianPriceUsd: "41.00",
  salesCount: 7,
  snapshotDate: "2026-06-01",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `gradeType`        | *string*           | :heavy_minus_sign: | N/A                | raw                |
| `gradeValue`       | *string*           | :heavy_minus_sign: | N/A                | null               |
| `gradeDisplay`     | *string*           | :heavy_minus_sign: | N/A                | Raw                |
| `avgPriceUsd`      | *string*           | :heavy_minus_sign: | N/A                | 42.10              |
| `minPriceUsd`      | *string*           | :heavy_minus_sign: | N/A                | 30.00              |
| `maxPriceUsd`      | *string*           | :heavy_minus_sign: | N/A                | 55.00              |
| `medianPriceUsd`   | *string*           | :heavy_minus_sign: | N/A                | 41.00              |
| `salesCount`       | *number*           | :heavy_minus_sign: | N/A                | 7                  |
| `snapshotDate`     | *string*           | :heavy_minus_sign: | N/A                | 2026-06-01         |