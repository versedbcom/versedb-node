# RemoveIssueFromCollectionRequestBody

## Example Usage

```typescript
import { RemoveIssueFromCollectionRequestBody } from "@versedbcom/sdk/models/operations";

let value: RemoveIssueFromCollectionRequestBody = {
  variantId: 789,
  collectionItemId: 1001,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `variantId`                                       | *number*                                          | :heavy_minus_sign:                                | Specific variant ID to remove (optional).         | 789                                               |
| `collectionItemId`                                | *number*                                          | :heavy_minus_sign:                                | Specific collection item ID to remove (optional). | 1001                                              |