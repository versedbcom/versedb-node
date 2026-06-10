# CreateListData

## Example Usage

```typescript
import { CreateListData } from "@versedbcom/sdk/models/operations";

let value: CreateListData = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 102                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Best Spider-Man Stories                                                  |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | My favorite Spidey moments ranked                                        |
| `entityType`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | issues                                                                   |
| `isRanked`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | true                                                                     |
| `isPrivate`                                                              | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `itemsCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 0                                                                        |
| `user`                                                                   | [operations.CreateListUser](../../models/operations/create-list-user.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |