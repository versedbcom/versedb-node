# AddItemToListResponseBody

Added.

## Example Usage

```typescript
import { AddItemToListResponseBody } from "@versedbcom/sdk/models/operations";

let value: AddItemToListResponseBody = {
  data: {
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
      id: 12,
      slug: "spider-man",
      name: "Spider-Man",
      realName: "Peter Parker",
      imageUrl: "https://...-profile_md.webp",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.AddItemToListData](../../models/operations/add-item-to-list-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |