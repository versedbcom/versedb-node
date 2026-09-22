# LendACopyOutResponseBody

Lent

## Example Usage

```typescript
import { LendACopyOutResponseBody } from "@versedbcom/sdk/models/operations";

let value: LendACopyOutResponseBody = {
  data: {
    id: 1001,
    loan: {
      id: 42,
      loanedTo: "Dan from the shop",
      loanedAt: "2026-09-01",
      dueAt: "2026-10-01",
      isOverdue: false,
      daysUntilDue: 30,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.LendACopyOutData](../../models/operations/lend-a-copy-out-data.md) | :heavy_minus_sign:                                                             | N/A                                                                            |