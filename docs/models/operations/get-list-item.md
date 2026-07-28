# GetListItem

## Example Usage

```typescript
import { GetListItem } from "@versedbcom/sdk/models/operations";

let value: GetListItem = {
  id: 1,
  position: 1,
  note: "Classic!",
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-15T10:30:00Z",
  variantId: 7,
  variant: {
    id: 7,
    name: "Virgin Variant",
    coverImageUrl: "https://cdn.versedb.com/variants/7/cover_md.webp",
  },
  entityType: "issues",
  entity: {
    id: 5432,
    slug: "the-amazing-spider-man-1",
    name: "The Amazing Spider-Man #1",
    issueNumber: "1",
    releaseDate: "2018-07-11",
    imageUrl: "https://cdn.versedb.com/issues/5432/cover_md.webp",
    isNsfw: false,
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 1                                                                        |
| `position`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 1                                                                        |
| `note`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Classic!                                                                 |
| `createdAt`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 2024-01-15T10:30:00Z                                                     |
| `updatedAt`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 2024-01-15T10:30:00Z                                                     |
| `variantId`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 7                                                                        |
| `variant`                                                                | [operations.GetListVariant](../../models/operations/get-list-variant.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `entityType`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | issues                                                                   |
| `entity`                                                                 | [operations.GetListEntity](../../models/operations/get-list-entity.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |