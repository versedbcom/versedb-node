# AddItemToListItem

## Example Usage

```typescript
import { AddItemToListItem } from "@versedbcom/sdk/models/operations";

let value: AddItemToListItem = {
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
    id: 5432,
    slug: "the-amazing-spider-man-1",
    name: "The Amazing Spider-Man #1",
    issueNumber: "1",
    releaseDate: "2018-07-11",
    focDate: "2018-06-18",
    imageUrl: "https://...-cover_md.webp",
    isNsfw: true,
    publisher: "Marvel Comics",
    series: {
      id: 88,
      name: "The Amazing Spider-Man",
      slug: "the-amazing-spider-man",
      startYear: 2018,
    },
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 1                                                                                                       |
| `position`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | Its place on a ranked or rule-built list.                                                               | 1                                                                                                       |
| `note`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | Classic!                                                                                                |
| `createdAt`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 2024-01-15T10:30:00+00:00                                                                               |
| `updatedAt`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 2024-01-15T10:30:00+00:00                                                                               |
| `variantId`                                                                                             | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 7                                                                                                       |
| `variant`                                                                                               | [operations.AddItemToListConflictVariant](../../models/operations/add-item-to-list-conflict-variant.md) | :heavy_minus_sign:                                                                                      | The pinned cover, while it exists.                                                                      |                                                                                                         |
| `entityType`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | issues, series, characters, creators, story_arcs or teams.                                              | issues                                                                                                  |
| `entity`                                                                                                | *operations.ConflictEntityUnion*                                                                        | :heavy_minus_sign:                                                                                      | Left out once the entity is gone.                                                                       |                                                                                                         |