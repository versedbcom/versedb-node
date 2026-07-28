# CheckIssueInCollectionData

## Example Usage

```typescript
import { CheckIssueInCollectionData } from "@versedbcom/sdk/models/operations";

let value: CheckIssueInCollectionData = {
  id: 1001,
  condition: "NM",
  pricePaid: 4.99,
  issue: {
    id: 5432,
    name: "The Amazing Spider-Man #1",
    issueNumber: "1",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 1001                                                                                                 |
| `condition`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | NM                                                                                                   |
| `pricePaid`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 4.99                                                                                                 |
| `issue`                                                                                              | [operations.CheckIssueInCollectionIssue](../../models/operations/check-issue-in-collection-issue.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |