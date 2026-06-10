# GetListData

## Example Usage

```typescript
import { GetListData } from "@versedbcom/sdk/models/operations";

let value: GetListData = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 101                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Best Spider-Man Stories                                                                       |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | My favorite Spidey moments                                                                    |
| `entityType`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | issues                                                                                        |
| `isRanked`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | true                                                                                          |
| `isPrivate`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | false                                                                                         |
| `itemsCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 25                                                                                            |
| `likesCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 150                                                                                           |
| `savesCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 89                                                                                            |
| `user`                                                                                        | [operations.GetListUser](../../models/operations/get-list-user.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `items`                                                                                       | [operations.GetListItem](../../models/operations/get-list-item.md)[]                          | :heavy_minus_sign:                                                                            | N/A                                                                                           | [<br/>{<br/>"id": 1,<br/>"position": 1,<br/>"note": "Classic!",<br/>"listable": {<br/>"id": 5432,<br/>"number": "1"<br/>}<br/>}<br/>] |
| `createdAt`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2024-01-15T10:30:00Z                                                                          |