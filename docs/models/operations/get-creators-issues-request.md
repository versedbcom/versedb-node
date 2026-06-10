# GetCreatorsIssuesRequest

## Example Usage

```typescript
import { GetCreatorsIssuesRequest } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsIssuesRequest = {
  creatorId: 789,
  limit: 20,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `creatorId`                | *number*                   | :heavy_check_mark:         | The creator ID.            | 789                        |
| `limit`                    | *number*                   | :heavy_minus_sign:         | Results per page (max 50). | 20                         |