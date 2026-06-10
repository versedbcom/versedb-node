# BrowseSystemListsResponseBody

Success

## Example Usage

```typescript
import { BrowseSystemListsResponseBody } from "@versedbcom/sdk/models/operations";

let value: BrowseSystemListsResponseBody = {
  data: [
    {
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
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 2,
    perPage: 20,
    total: 30,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                      | [operations.BrowseSystemListsData](../../models/operations/browse-system-lists-data.md)[]                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                         | [<br/>{<br/>"id": 1,<br/>"title": "Essential Batman Reading Order",<br/>"entity_type": "issues",<br/>"is_ranked": true,<br/>"items_count": 50,<br/>"likes_count": 500,<br/>"user": null,<br/>"preview_items": [<br/>{<br/>"id": 1,<br/>"image_url": "https://...",<br/>"is_nsfw": false<br/>}<br/>]<br/>}<br/>] |
| `meta`                                                                                                                                                                                                                                      | [operations.BrowseSystemListsMeta](../../models/operations/browse-system-lists-meta.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                             |