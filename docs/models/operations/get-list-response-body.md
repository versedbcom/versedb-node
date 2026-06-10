# GetListResponseBody

Success

## Example Usage

```typescript
import { GetListResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetListResponseBody = {
  data: {
    id: 101,
    title: "Best Spider-Man Stories",
    description: "My favorite Spidey moments",
    entityType: "issues",
    isRanked: true,
    isPrivate: false,
    itemsCount: 25,
    likesCount: 150,
    savesCount: 89,
    user: {
      id: 123,
      username: "comic_fan",
      name: "John",
    },
    items: [
      {
        id: 1,
        position: 1,
        note: "Classic!",
        listable: {
          id: 5432,
          number: "1",
        },
      },
    ],
    createdAt: "2024-01-15T10:30:00Z",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [operations.GetListData](../../models/operations/get-list-data.md) | :heavy_minus_sign:                                                 | N/A                                                                |