# GetIssueCreatorsPivot

## Example Usage

```typescript
import { GetIssueCreatorsPivot } from "@versedbcom/sdk/models/operations";

let value: GetIssueCreatorsPivot = {
  issueId: 5432,
  creatorId: 789,
  creatorRoleId: 1,
  isUncredited: true,
  sortOrder: 0,
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `issueId`                   | *number*                    | :heavy_check_mark:          | N/A                         | 5432                        |
| `creatorId`                 | *number*                    | :heavy_check_mark:          | N/A                         | 789                         |
| `creatorRoleId`             | *number*                    | :heavy_check_mark:          | N/A                         | 1                           |
| `isUncredited`              | *boolean*                   | :heavy_check_mark:          | N/A                         |                             |
| `sortOrder`                 | *number*                    | :heavy_check_mark:          | N/A                         | 0                           |
| `createdAt`                 | *string*                    | :heavy_check_mark:          | N/A                         | 2024-01-15T10:30:00.000000Z |
| `updatedAt`                 | *string*                    | :heavy_check_mark:          | N/A                         | 2024-01-15T10:30:00.000000Z |