# ReorderItemsItem

## Example Usage

```typescript
import { ReorderItemsItem } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsItem = {
  id: 1,
  position: 1,
  note: "Classic!",
  createdAt: "2024-01-15T10:30:00+00:00",
  updatedAt: "2024-01-15T10:30:00+00:00",
  variantId: 7,
  variant: {
    id: 7,
    name: "Virgin Variant",
    ratio: "1:25",
    coverImageUrl: "https://...-cover_md.webp",
  },
  entityType: "issues",
  entity: {
    id: 6,
    slug: "kraven-s-last-hunt",
    name: "Kraven's Last Hunt",
    imageUrl: "https://...-cover_md.webp",
    issuesCount: 6,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 1                                                                                  |
| `position`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | Its place on a ranked or rule-built list.                                          | 1                                                                                  |
| `note`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | Classic!                                                                           |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 2024-01-15T10:30:00+00:00                                                          |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 2024-01-15T10:30:00+00:00                                                          |
| `variantId`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 7                                                                                  |
| `variant`                                                                          | [operations.ReorderItemsVariant](../../models/operations/reorder-items-variant.md) | :heavy_minus_sign:                                                                 | The pinned cover, while it exists.                                                 |                                                                                    |
| `entityType`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | issues, series, characters, creators, story_arcs or teams.                         | issues                                                                             |
| `entity`                                                                           | *operations.ReorderItemsEntityUnion*                                               | :heavy_minus_sign:                                                                 | Left out once the entity is gone.                                                  |                                                                                    |