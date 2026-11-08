# GetIssueCharactersPivot

## Example Usage

```typescript
import { GetIssueCharactersPivot } from "@versedbcom/sdk/models/operations";

let value: GetIssueCharactersPivot = {
  issueId: 5432,
  characterId: 456,
  isSpoiler: false,
  sortOrder: 0,
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `issueId`                   | *number*                    | :heavy_check_mark:          | N/A                         | 5432                        |
| `characterId`               | *number*                    | :heavy_check_mark:          | N/A                         | 456                         |
| `isSpoiler`                 | *boolean*                   | :heavy_check_mark:          | N/A                         |                             |
| `sortOrder`                 | *number*                    | :heavy_check_mark:          | N/A                         | 0                           |
| `createdAt`                 | *string*                    | :heavy_check_mark:          | N/A                         | 2024-01-15T10:30:00.000000Z |
| `updatedAt`                 | *string*                    | :heavy_check_mark:          | N/A                         | 2024-01-15T10:30:00.000000Z |