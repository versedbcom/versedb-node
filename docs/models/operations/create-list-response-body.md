# CreateListResponseBody

Success

## Example Usage

```typescript
import { CreateListResponseBody } from "@versedbcom/sdk/models/operations";

let value: CreateListResponseBody = {
  data: {
    id: 102,
    title: "Best Spider-Man Stories",
    description: "My favorite Spidey moments ranked",
    entityType: "issues",
    isRanked: true,
    isPrivate: false,
    itemsCount: 0,
    user: {
      id: 123,
      username: "comic_fan",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.CreateListData](../../models/operations/create-list-data.md) | :heavy_minus_sign:                                                       | N/A                                                                      |