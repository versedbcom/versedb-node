# ListWishlistResponseBody

Success

## Example Usage

```typescript
import { ListWishlistResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListWishlistResponseBody = {
  data: [
    {
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
    },
  ],
  links: {
    first: "<value>",
    last: "<value>",
    prev: null,
    next: "<value>",
  },
  meta: {
    currentPage: 1,
    from: 1,
    lastPage: 25,
    links: [],
    path: "/Library",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.ListWishlistData](../../models/operations/list-wishlist-data.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `links`                                                                        | [operations.ListWishlistLinks](../../models/operations/list-wishlist-links.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `meta`                                                                         | [operations.ListWishlistMeta](../../models/operations/list-wishlist-meta.md)   | :heavy_check_mark:                                                             | N/A                                                                            |