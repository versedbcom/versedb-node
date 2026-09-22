# LendACopyOutData

## Example Usage

```typescript
import { LendACopyOutData } from "@versedbcom/sdk/models/operations";

let value: LendACopyOutData = {
  id: 1001,
  loan: {
    id: 42,
    loanedTo: "Dan from the shop",
    loanedAt: "2026-09-01",
    dueAt: "2026-10-01",
    isOverdue: false,
    daysUntilDue: 30,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *number*                                           | :heavy_minus_sign:                                 | N/A                                                | 1001                                               |
| `loan`                                             | [operations.Loan](../../models/operations/loan.md) | :heavy_minus_sign:                                 | N/A                                                |                                                    |