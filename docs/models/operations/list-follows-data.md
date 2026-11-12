# ListFollowsData

## Example Usage

```typescript
import { ListFollowsData } from "@versedbcom/sdk/models/operations";

let value: ListFollowsData = {
  id: 789,
  userId: 12,
  followableType: "Title",
  followableId: 123,
  preferences: {
    "email_notifications": true,
  },
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
  followable: {
    id: 123,
    name: "Spider-Man",
    slug: "spider-man",
    username: "reader42",
    imageUrl: "https://...",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            | 789                                                            |
| `userId`                                                       | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            | 12                                                             |
| `followableType`                                               | *string*                                                       | :heavy_check_mark:                                             | The morph alias of the followed entity.                        | Title                                                          |
| `followableId`                                                 | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            | 123                                                            |
| `preferences`                                                  | *operations.ListFollowsPreferences*                            | :heavy_check_mark:                                             | The notification preferences given with the follow.            | {<br/>"email_notifications": true<br/>}                        |
| `createdAt`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 2024-01-15T10:30:00.000000Z                                    |
| `updatedAt`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 2024-01-15T10:30:00.000000Z                                    |
| `followable`                                                   | [operations.Followable](../../models/operations/followable.md) | :heavy_check_mark:                                             | The followed entity, or null when it is gone.                  |                                                                |