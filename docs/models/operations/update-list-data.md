# UpdateListData

## Example Usage

```typescript
import { UpdateListData } from "@versedbcom/sdk/models/operations";

let value: UpdateListData = {
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
        id: 42,
        slug: "stan-lee",
        name: "Stan Lee",
        imageUrl: "https://...-profile_md.webp",
      },
    },
  ],
  reactions: [],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 101                                                                                       |
| `title`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | Best Spider-Man Stories                                                                   |
| `slug`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | best-spider-man-stories                                                                   |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | My favorite Spidey moments                                                                |
| `entityType`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | issues, series, characters, creators, story_arcs, teams, or mixed for a list of any type. | issues                                                                                    |
| `entityTypeLabel`                                                                         | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | Issues                                                                                    |
| `isCurated`                                                                               | *boolean*                                                                                 | :heavy_check_mark:                                                                        | The list is VerseDB's own.                                                                | false                                                                                     |
| `itemTypes`                                                                               | *string*[]                                                                                | :heavy_check_mark:                                                                        | The types its items hold: its own type, or each type a mixed list holds.                  | [<br/>"issues"<br/>]                                                                      |
| `isRanked`                                                                                | *boolean*                                                                                 | :heavy_check_mark:                                                                        | N/A                                                                                       | true                                                                                      |
| `sortOptions`                                                                             | Record<string, *string*>                                                                  | :heavy_check_mark:                                                                        | What `sort` takes on this list, each with its label; the empty key is its own order.      | {<br/>"": "List order",<br/>"recent": "Recently added"<br/>}                              |
| `isPrivate`                                                                               | *boolean*                                                                                 | :heavy_check_mark:                                                                        | N/A                                                                                       | false                                                                                     |
| `status`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | published or draft.                                                                       | published                                                                                 |
| `listType`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | custom, wishlist or reading_guide.                                                        | custom                                                                                    |
| `itemsCount`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 25                                                                                        |
| `savesCount`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 89                                                                                        |
| `likesCount`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 150                                                                                       |
| `clonesCount`                                                                             | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 3                                                                                         |
| `createdAt`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 2024-01-15T10:30:00+00:00                                                                 |
| `updatedAt`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 2024-01-15T10:30:00+00:00                                                                 |
| `isSmart`                                                                                 | *boolean*                                                                                 | :heavy_check_mark:                                                                        | A rule keeps the list up to date.                                                         | false                                                                                     |
| `isRuleBased`                                                                             | *boolean*                                                                                 | :heavy_check_mark:                                                                        | N/A                                                                                       | false                                                                                     |
| `lastRefreshedAt`                                                                         | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 2024-01-16T04:00:00+00:00                                                                 |
| `smartPaused`                                                                             | *boolean*                                                                                 | :heavy_check_mark:                                                                        | A rule-built list that stopped updating while its owner's Pro is inactive.                | false                                                                                     |
| `clonedFromListId`                                                                        | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | null                                                                                      |
| `clonedFrom`                                                                              | [operations.UpdateListClonedFrom](../../models/operations/update-list-cloned-from.md)     | :heavy_minus_sign:                                                                        | The list this one was cloned from, while it exists.                                       |                                                                                           |
| `user`                                                                                    | [operations.UpdateListUser](../../models/operations/update-list-user.md)                  | :heavy_check_mark:                                                                        | The owner; null once the account is gone.                                                 |                                                                                           |
| `items`                                                                                   | [operations.UpdateListItem](../../models/operations/update-list-item.md)[]                | :heavy_check_mark:                                                                        | Every item, in the list's own order or by `sort`.                                         |                                                                                           |
| `reactions`                                                                               | [operations.UpdateListReaction](../../models/operations/update-list-reaction.md)[]        | :heavy_check_mark:                                                                        | The reactions left on the list, the most used first.                                      |                                                                                           |