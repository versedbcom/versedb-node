# BrowseListsData

## Example Usage

```typescript
import { BrowseListsData } from "@versedbcom/sdk/models/operations";

let value: BrowseListsData = {
  id: 101,
  title: "Best Spider-Man Stories",
  entityType: "issues",
  isRanked: true,
  itemsCount: 25,
  likesCount: 150,
  savesCount: 89,
  user: {
    id: 123,
    username: "comic_fan",
    avatar: "https://...",
  },
  previewItems: [
    {
      id: 1,
      imageUrl: "https://...",
      isNsfw: false,
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 101                                                                                         |
| `title`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Best Spider-Man Stories                                                                     |
| `entityType`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | issues                                                                                      |
| `isRanked`                                                                                  | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         | true                                                                                        |
| `itemsCount`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 25                                                                                          |
| `likesCount`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 150                                                                                         |
| `savesCount`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 89                                                                                          |
| `user`                                                                                      | [operations.BrowseListsUser](../../models/operations/browse-lists-user.md)                  | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `previewItems`                                                                              | [operations.BrowseListsPreviewItem](../../models/operations/browse-lists-preview-item.md)[] | :heavy_minus_sign:                                                                          | N/A                                                                                         | [<br/>{<br/>"id": 1,<br/>"image_url": "https://...",<br/>"is_nsfw": false<br/>}<br/>]       |