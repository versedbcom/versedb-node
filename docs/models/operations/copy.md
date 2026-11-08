# Copy

## Example Usage

```typescript
import { Copy } from "@versedbcom/sdk/models/operations";

let value: Copy = {
  id: 1001,
  variantId: 789,
  condition: "NM",
  graded: false,
  gradeScore: "9.8",
  gradingCompany: "CGC",
  isSigned: false,
  signedBy: "Stan Lee",
  isCgcSs: true,
  format: "single",
  storageLocation: "Long box 3",
  purchasedAt: "2024-01-15T00:00:00+00:00",
  notes: "First print",
  createdAt: "2024-01-15T10:30:00+00:00",
  updatedAt: "2024-01-15T10:30:00+00:00",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `id`                      | *number*                  | :heavy_check_mark:        | N/A                       | 1001                      |
| `variantId`               | *number*                  | :heavy_check_mark:        | N/A                       | 789                       |
| `condition`               | *string*                  | :heavy_check_mark:        | N/A                       | NM                        |
| `graded`                  | *boolean*                 | :heavy_check_mark:        | N/A                       |                           |
| `gradeScore`              | *string*                  | :heavy_check_mark:        | N/A                       | 9.8                       |
| `gradingCompany`          | *string*                  | :heavy_check_mark:        | N/A                       | CGC                       |
| `isSigned`                | *boolean*                 | :heavy_check_mark:        | N/A                       |                           |
| `signedBy`                | *string*                  | :heavy_check_mark:        | N/A                       | Stan Lee                  |
| `isCgcSs`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |                           |
| `format`                  | *string*                  | :heavy_check_mark:        | N/A                       | single                    |
| `storageLocation`         | *string*                  | :heavy_check_mark:        | N/A                       | Long box 3                |
| `purchasedAt`             | *string*                  | :heavy_check_mark:        | N/A                       | 2024-01-15T00:00:00+00:00 |
| `notes`                   | *string*                  | :heavy_check_mark:        | N/A                       | First print               |
| `createdAt`               | *string*                  | :heavy_check_mark:        | N/A                       | 2024-01-15T10:30:00+00:00 |
| `updatedAt`               | *string*                  | :heavy_check_mark:        | N/A                       | 2024-01-15T10:30:00+00:00 |