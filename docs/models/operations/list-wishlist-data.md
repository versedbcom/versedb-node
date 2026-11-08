# ListWishlistData

## Example Usage

```typescript
import { ListWishlistData } from "@versedbcom/sdk/models/operations";

let value: ListWishlistData = {
  id: 9876,
  position: null,
  note: null,
  createdAt: "2024-01-15T10:30:00+00:00",
  updatedAt: "2024-01-15T10:30:00+00:00",
  variantId: null,
  variant: {
    id: 7,
    name: "Cover B",
    ratio: "1:25",
    coverImageUrl: "https://...-cover_md.webp",
  },
  entityType: "issues",
  entity: {
    id: 5432,
    slug: "amazing-spider-man-1",
    name: "Amazing Spider-Man #1",
    issueNumber: "1",
    releaseDate: "2018-07-11",
    focDate: "2018-06-18",
    imageUrl: "https://...-cover_md.webp",
    isNsfw: true,
    publisher: "Marvel",
    series: {
      id: 123,
      name: "Amazing Spider-Man",
      slug: "amazing-spider-man-2018",
      startYear: 2018,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 9876                                                                               |
| `position`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | null                                                                               |
| `note`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Left out for a `read:showcase` token.                                              | null                                                                               |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 2024-01-15T10:30:00+00:00                                                          |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 2024-01-15T10:30:00+00:00                                                          |
| `variantId`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | null                                                                               |
| `variant`                                                                          | [operations.ListWishlistVariant](../../models/operations/list-wishlist-variant.md) | :heavy_minus_sign:                                                                 | The pinned cover, while it exists.                                                 |                                                                                    |
| `entityType`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | issues                                                                             |
| `entity`                                                                           | [operations.ListWishlistEntity](../../models/operations/list-wishlist-entity.md)   | :heavy_minus_sign:                                                                 | Left out once the issue is gone.                                                   |                                                                                    |