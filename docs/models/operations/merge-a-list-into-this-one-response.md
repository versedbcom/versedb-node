# MergeAListIntoThisOneResponse

## Example Usage

```typescript
import { MergeAListIntoThisOneResponse } from "@versedbcom/sdk/models/operations";

let value: MergeAListIntoThisOneResponse = {
  headers: {},
  result: {
    data: {
      id: 101,
      title: "Best Spider-Man Stories",
      slug: "best-spider-man-stories",
      description: "My favorite Spidey moments",
      entityType: "issues",
      entityTypeLabel: "Issues",
      isCurated: false,
      itemTypes: [
        "issues",
      ],
      isRanked: true,
      sortOptions: {
        "": "List order",
        "recent": "Recently added",
      },
      isPrivate: false,
      status: "published",
      listType: "custom",
      itemsCount: 25,
      savesCount: 89,
      likesCount: 150,
      clonesCount: 3,
      createdAt: "2024-01-15T10:30:00+00:00",
      updatedAt: "2024-01-15T10:30:00+00:00",
      isSmart: false,
      isRuleBased: false,
      lastRefreshedAt: "2024-01-16T04:00:00+00:00",
      smartPaused: false,
      clonedFromListId: null,
      clonedFrom: {
        id: 77,
        title: "Spider-Man Essentials",
        slug: "spider-man-essentials",
        user: {
          id: 9,
          username: "webhead",
        },
      },
      user: {
        id: 123,
        username: "comic_fan",
        name: "comic_fan",
        avatar: "https://...-profile_md.webp",
      },
      items: [
        {
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
        },
      ],
      reactions: [],
    },
    merge: {
      moved: 4,
      skippedDuplicates: 1,
      convertedToMixed: false,
      sourceDeleted: false,
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                           | Record<string, *string*[]>                                                                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `result`                                                                                                            | [operations.MergeAListIntoThisOneResponseBody](../../models/operations/merge-a-list-into-this-one-response-body.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |