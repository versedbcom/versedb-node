# RemoveIssueFromCollectionRequest

## Example Usage

```typescript
import { RemoveIssueFromCollectionRequest } from "@versedbcom/sdk/models/operations";

let value: RemoveIssueFromCollectionRequest = {
  issueId: 5432,
  variantId: 789,
  collectionItemId: 1001,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                                               | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The issue ID.                                                                                                           | 5432                                                                                                                    |
| `variantId`                                                                                                             | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Specific variant ID to remove (optional).                                                                               | 789                                                                                                                     |
| `collectionItemId`                                                                                                      | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Specific collection item ID to remove (optional).                                                                       | 1001                                                                                                                    |
| `body`                                                                                                                  | [operations.RemoveIssueFromCollectionRequestBody](../../models/operations/remove-issue-from-collection-request-body.md) | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |