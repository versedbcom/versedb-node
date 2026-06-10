# ListWishlistData

## Example Usage

```typescript
import { ListWishlistData } from "@versedbcom/sdk/models/operations";

let value: ListWishlistData = {
  id: 9876,
  position: null,
  note: null,
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-15T10:30:00Z",
  variantId: null,
  entityType: "issues",
  entity: {
    id: 5432,
    name: "Amazing Spider-Man #1",
    issueNumber: "1",
    publisher: "Marvel",
    series: {
      id: 123,
      name: "Amazing Spider-Man",
      startYear: 2018,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 9876                                                                             |
| `position`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | null                                                                             |
| `note`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | null                                                                             |
| `createdAt`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 2024-01-15T10:30:00Z                                                             |
| `updatedAt`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 2024-01-15T10:30:00Z                                                             |
| `variantId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | null                                                                             |
| `entityType`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | issues                                                                           |
| `entity`                                                                         | [operations.ListWishlistEntity](../../models/operations/list-wishlist-entity.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |