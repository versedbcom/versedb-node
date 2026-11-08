# BrowseSystemListsData

## Example Usage

```typescript
import { BrowseSystemListsData } from "@versedbcom/sdk/models/operations";

let value: BrowseSystemListsData = {
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 101                                                                                                      |
| `title`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | Best Spider-Man Stories                                                                                  |
| `slug`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | best-spider-man-stories                                                                                  |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The first 150 characters; left out when the list has none.                                               | My favorite Spidey moments                                                                               |
| `entityType`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | issues, series, characters, creators, story_arcs, teams, or mixed for a list of any type.                | issues                                                                                                   |
| `listType`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | custom, wishlist or reading_guide.                                                                       | custom                                                                                                   |
| `entityTypeLabel`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | Issues                                                                                                   |
| `isCurated`                                                                                              | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | The list is VerseDB's own.                                                                               | false                                                                                                    |
| `isSmart`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | A rule keeps the list up to date.                                                                        | false                                                                                                    |
| `isRanked`                                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      | true                                                                                                     |
| `isPrivate`                                                                                              | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      | false                                                                                                    |
| `itemsCount`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 25                                                                                                       |
| `savesCount`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 89                                                                                                       |
| `likesCount`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 150                                                                                                      |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 2024-01-15T10:30:00+00:00                                                                                |
| `updatedAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 2024-01-15T10:30:00+00:00                                                                                |
| `user`                                                                                                   | [operations.BrowseSystemListsUser](../../models/operations/browse-system-lists-user.md)                  | :heavy_check_mark:                                                                                       | The owner; null once the account is gone.                                                                |                                                                                                          |
| `previewItems`                                                                                           | [operations.BrowseSystemListsPreviewItem](../../models/operations/browse-system-lists-preview-item.md)[] | :heavy_minus_sign:                                                                                       | The list's first four items in its own order; left out when it holds none.                               |                                                                                                          |