# SetPullListIssueCoversRequest

## Example Usage

```typescript
import { SetPullListIssueCoversRequest } from "@versedbcom/sdk/models/operations";

let value: SetPullListIssueCoversRequest = {
  issueId: 5432,
  body: {
    standard: true,
    variantIds: [
      789,
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `issueId`                                                                                                          | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The issue ID.                                                                                                      | 5432                                                                                                               |
| `body`                                                                                                             | [operations.SetPullListIssueCoversRequestBody](../../models/operations/set-pull-list-issue-covers-request-body.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |