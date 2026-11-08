# BrowseSystemListsResponse

## Example Usage

```typescript
import { BrowseSystemListsResponse } from "@versedbcom/sdk/models/operations";

let value: BrowseSystemListsResponse = {
  headers: {},
  result: {
    data: [
      {
        id: 101,
        title: "Best Spider-Man Stories",
        slug: "best-spider-man-stories",
        description: "My favorite Spidey moments",
        entityType: "issues",
        listType: "custom",
        entityTypeLabel: "Issues",
        isCurated: false,
        isSmart: false,
        isRanked: true,
        isPrivate: false,
        itemsCount: 25,
        savesCount: 89,
        likesCount: 150,
        createdAt: "2024-01-15T10:30:00+00:00",
        updatedAt: "2024-01-15T10:30:00+00:00",
        user: {
          id: 123,
          username: "comic_fan",
          avatar: "https://...-profile_md.webp",
        },
        previewItems: [
          {
            id: 1,
            imageUrl: "https://...-cover_sm.webp",
            isNsfw: false,
          },
        ],
      },
    ],
    links: {
      first: "<value>",
      last: "<value>",
      prev: "<value>",
      next: "<value>",
    },
    meta: {
      currentPage: 1,
      from: 1,
      lastPage: 25,
      links: [],
      path: "/Applications",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.BrowseSystemListsResponseBody](../../models/operations/browse-system-lists-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |