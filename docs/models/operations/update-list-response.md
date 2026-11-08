# UpdateListResponse

## Example Usage

```typescript
import { UpdateListResponse } from "@versedbcom/sdk/models/operations";

let value: UpdateListResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
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
      user: null,
      items: [],
      reactions: [],
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.UpdateListResponseBody](../../models/operations/update-list-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |