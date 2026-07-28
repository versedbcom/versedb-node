# Copy

## Example Usage

```typescript
import { Copy } from "@versedbcom/sdk/models/operations";

let value: Copy = {
  id: 1001,
  variantId: 789,
  condition: "NM",
  graded: true,
  gradeScore: "9.8",
  gradingCompany: "CGC",
  isSigned: false,
  signedBy: null,
  isCgcSs: false,
  format: "single",
  storageLocation: "Long box 3",
  purchasedAt: "2024-01-15T00:00:00Z",
  notes: "First print",
  createdAt: "2024-01-15T10:30:00Z",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `id`                 | *number*             | :heavy_minus_sign:   | N/A                  | 1001                 |
| `variantId`          | *number*             | :heavy_minus_sign:   | N/A                  | 789                  |
| `condition`          | *string*             | :heavy_minus_sign:   | N/A                  | NM                   |
| `graded`             | *boolean*            | :heavy_minus_sign:   | N/A                  | true                 |
| `gradeScore`         | *string*             | :heavy_minus_sign:   | N/A                  | 9.8                  |
| `gradingCompany`     | *string*             | :heavy_minus_sign:   | N/A                  | CGC                  |
| `isSigned`           | *boolean*            | :heavy_minus_sign:   | N/A                  | false                |
| `signedBy`           | *string*             | :heavy_minus_sign:   | N/A                  | null                 |
| `isCgcSs`            | *boolean*            | :heavy_minus_sign:   | N/A                  | false                |
| `format`             | *string*             | :heavy_minus_sign:   | N/A                  | single               |
| `storageLocation`    | *string*             | :heavy_minus_sign:   | N/A                  | Long box 3           |
| `purchasedAt`        | *string*             | :heavy_minus_sign:   | N/A                  | 2024-01-15T00:00:00Z |
| `notes`              | *string*             | :heavy_minus_sign:   | N/A                  | First print          |
| `createdAt`          | *string*             | :heavy_minus_sign:   | N/A                  | 2024-01-15T10:30:00Z |