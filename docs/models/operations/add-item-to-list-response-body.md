# AddItemToListResponseBody

Added

## Example Usage

```typescript
import { AddItemToListResponseBody } from "@versedbcom/sdk/models/operations";

let value: AddItemToListResponseBody = {
  data: {
    id: 501,
    position: 1,
    note: "My favorite issue!",
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.AddItemToListData](../../models/operations/add-item-to-list-data.md) | :heavy_minus_sign:                                                               | N/A                                                                              |