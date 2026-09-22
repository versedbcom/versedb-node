# Loan

## Example Usage

```typescript
import { Loan } from "@versedbcom/sdk/models/operations";

let value: Loan = {
  id: 42,
  loanedTo: "Dan from the shop",
  loanedAt: "2026-09-01",
  dueAt: "2026-10-01",
  isOverdue: false,
  daysUntilDue: 30,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_minus_sign: | N/A                | 42                 |
| `loanedTo`         | *string*           | :heavy_minus_sign: | N/A                | Dan from the shop  |
| `loanedAt`         | *string*           | :heavy_minus_sign: | N/A                | 2026-09-01         |
| `dueAt`            | *string*           | :heavy_minus_sign: | N/A                | 2026-10-01         |
| `isOverdue`        | *boolean*          | :heavy_minus_sign: | N/A                | false              |
| `daysUntilDue`     | *number*           | :heavy_minus_sign: | N/A                | 30                 |