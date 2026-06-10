# ListFollowsData

## Example Usage

```typescript
import { ListFollowsData } from "@versedbcom/sdk/models/operations";

let value: ListFollowsData = {
  id: 789,
  followableType: "title",
  followableId: 123,
  followable: {
    id: 123,
    name: "Spider-Man",
  },
  createdAt: "2024-01-15T10:30:00Z",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 789                                                            |
| `followableType`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | title                                                          |
| `followableId`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123                                                            |
| `followable`                                                   | [operations.Followable](../../models/operations/followable.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `createdAt`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 2024-01-15T10:30:00Z                                           |