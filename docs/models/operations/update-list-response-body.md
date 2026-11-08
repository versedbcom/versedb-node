# UpdateListResponseBody

Updated.

## Example Usage

```typescript
import { UpdateListResponseBody } from "@versedbcom/sdk/models/operations";

let value: UpdateListResponseBody = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.UpdateListData](../../models/operations/update-list-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |