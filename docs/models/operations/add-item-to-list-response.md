# AddItemToListResponse

## Example Usage

```typescript
import { AddItemToListResponse } from "@versedbcom/sdk/models/operations";

let value: AddItemToListResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [operations.AddItemToListResponseBody](../../models/operations/add-item-to-list-response-body.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |