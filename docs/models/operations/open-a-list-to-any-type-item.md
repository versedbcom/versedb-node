# OpenAListToAnyTypeItem

## Example Usage

```typescript
import { OpenAListToAnyTypeItem } from "@versedbcom/sdk/models/operations";

let value: OpenAListToAnyTypeItem = {
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
    id: 88,
    slug: "the-amazing-spider-man",
    name: "The Amazing Spider-Man",
    startYear: 2018,
    endYear: null,
    status: "Ongoing",
    publicationType: "regular_series",
    imageUrl: "https://...-cover_md.webp",
    isNsfw: false,
    issuesCount: 75,
    publisher: "Marvel Comics",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 1                                                                                                  |
| `position`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | Its place on a ranked or rule-built list.                                                          | 1                                                                                                  |
| `note`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | Classic!                                                                                           |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 2024-01-15T10:30:00+00:00                                                                          |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 2024-01-15T10:30:00+00:00                                                                          |
| `variantId`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 7                                                                                                  |
| `variant`                                                                                          | [operations.OpenAListToAnyTypeVariant](../../models/operations/open-a-list-to-any-type-variant.md) | :heavy_minus_sign:                                                                                 | The pinned cover, while it exists.                                                                 |                                                                                                    |
| `entityType`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | issues, series, characters, creators, story_arcs or teams.                                         | issues                                                                                             |
| `entity`                                                                                           | *operations.OpenAListToAnyTypeEntityUnion*                                                         | :heavy_minus_sign:                                                                                 | Left out once the entity is gone.                                                                  |                                                                                                    |