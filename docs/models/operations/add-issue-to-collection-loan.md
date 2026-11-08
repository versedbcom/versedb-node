# AddIssueToCollectionLoan

Left out for a `read:showcase` token.

## Example Usage

```typescript
import { AddIssueToCollectionLoan } from "@versedbcom/sdk/models/operations";

let value: AddIssueToCollectionLoan = {
  id: 3,
  loanedTo: "Sam",
  loanedAt: "2024-01-15",
  dueAt: "2024-02-15",
  isOverdue: false,
  daysUntilDue: 12,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_check_mark: | N/A                | 3                  |
| `loanedTo`         | *string*           | :heavy_check_mark: | N/A                | Sam                |
| `loanedAt`         | *string*           | :heavy_check_mark: | N/A                | 2024-01-15         |
| `dueAt`            | *string*           | :heavy_check_mark: | N/A                | 2024-02-15         |
| `isOverdue`        | *boolean*          | :heavy_check_mark: | N/A                |                    |
| `daysUntilDue`     | *number*           | :heavy_check_mark: | N/A                | 12                 |