# GetListResponseBody

Success

## Example Usage

```typescript
import { GetListResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetListResponseBody = {
  data: {
    id: 101,
    title: "Best Spider-Man Stories",
    description: "My favorite Spidey moments",
    entityType: "issues",
    isRanked: true,
    isPrivate: false,
    itemsCount: 25,
    likesCount: 150,
    savesCount: 89,
    user: {
      id: 123,
      username: "comic_fan",
      name: "John",
    },
    items: [
      {
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
      },
      {
        id: 2,
        position: 2,
        note: "Classic!",
        createdAt: "2024-01-15T10:31:00Z",
        updatedAt: "2024-01-15T10:31:00Z",
        variantId: 7,
        entityType: "issues",
        entity: {
          id: 5433,
          slug: "the-amazing-spider-man-2",
          name: "The Amazing Spider-Man #2",
          issueNumber: "2",
          releaseDate: "2018-07-25",
          imageUrl: "https://cdn.versedb.com/issues/5433/cover_md.webp",
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
    ],
    createdAt: "2024-01-15T10:30:00Z",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [operations.GetListData](../../models/operations/get-list-data.md) | :heavy_minus_sign:                                                 | N/A                                                                |