# BrowseSystemListsData

## Example Usage

```typescript
import { BrowseSystemListsData } from "@versedbcom/sdk/models/operations";

let value: BrowseSystemListsData = {
  id: 1,
  title: "Essential Batman Reading Order",
  entityType: "issues",
  isRanked: true,
  itemsCount: 50,
  likesCount: 500,
  user: null,
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | 1                                                                                                        |
| `title`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | Essential Batman Reading Order                                                                           |
| `entityType`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | issues                                                                                                   |
| `isRanked`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | true                                                                                                     |
| `itemsCount`                                                                                             | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | 50                                                                                                       |
| `likesCount`                                                                                             | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | 500                                                                                                      |
| `user`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | null                                                                                                     |
| `previewItems`                                                                                           | [operations.BrowseSystemListsPreviewItem](../../models/operations/browse-system-lists-preview-item.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | [<br/>{<br/>"id": 1,<br/>"image_url": "https://...",<br/>"is_nsfw": false<br/>}<br/>]                    |