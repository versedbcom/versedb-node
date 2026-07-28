# RemoveFromWishlistRequest

## Example Usage

```typescript
import { RemoveFromWishlistRequest } from "@versedbcom/sdk/models/operations";

let value: RemoveFromWishlistRequest = {
  issueId: 5432,
  variantId: 7,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                                                          | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The issue ID.                                                                                                                      | 5432                                                                                                                               |
| `variantId`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Optional cover variant to remove. Omit to remove the "any cover" entry — variant-pinned entries for the same issue are left alone. | 7                                                                                                                                  |
| `body`                                                                                                                             | [operations.RemoveFromWishlistRequestBody](../../models/operations/remove-from-wishlist-request-body.md)                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |