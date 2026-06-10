# GetUsersListsData

## Example Usage

```typescript
import { GetUsersListsData } from "@versedbcom/sdk/models/operations";

let value: GetUsersListsData = {
  id: 101,
  title: "My Reading List",
  entityType: "issues",
  itemsCount: 15,
  isPrivate: false,
  user: {
    id: 123,
    username: "comic_fan",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | 101                                                                             |
| `title`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | My Reading List                                                                 |
| `entityType`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | issues                                                                          |
| `itemsCount`                                                                    | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | 15                                                                              |
| `isPrivate`                                                                     | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | false                                                                           |
| `user`                                                                          | [operations.GetUsersListsUser](../../models/operations/get-users-lists-user.md) | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |