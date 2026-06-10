# UpdateCollectionItemRequest

## Example Usage

```typescript
import { UpdateCollectionItemRequest } from "@versedbcom/sdk/models/operations";

let value: UpdateCollectionItemRequest = {
  issueId: 5432,
  variantId: 789,
  collectionItemId: 1001,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `issueId`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The issue ID.                                                                                                | 5432                                                                                                         |
| `variantId`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Specific variant ID to update (when user has multiple entries).                                              | 789                                                                                                          |
| `collectionItemId`                                                                                           | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Specific collection item ID to update.                                                                       | 1001                                                                                                         |
| `body`                                                                                                       | [operations.UpdateCollectionItemRequestBody](../../models/operations/update-collection-item-request-body.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |