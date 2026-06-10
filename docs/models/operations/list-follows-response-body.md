# ListFollowsResponseBody

Success

## Example Usage

```typescript
import { ListFollowsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListFollowsResponseBody = {
  data: [
    {
      id: 789,
      followableType: "title",
      followableId: 123,
      followable: {
        id: 123,
        name: "Spider-Man",
      },
      createdAt: "2024-01-15T10:30:00Z",
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 20,
    total: 12,
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      | Example                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                           | [operations.ListFollowsData](../../models/operations/list-follows-data.md)[]                                                                                                     | :heavy_minus_sign:                                                                                                                                                               | N/A                                                                                                                                                                              | [<br/>{<br/>"id": 789,<br/>"followable_type": "title",<br/>"followable_id": 123,<br/>"followable": {<br/>"id": 123,<br/>"name": "Spider-Man",<br/>"cover_url": "..."<br/>},<br/>"created_at": "2024-01-15T10:30:00Z"<br/>}<br/>] |
| `meta`                                                                                                                                                                           | [operations.ListFollowsMeta](../../models/operations/list-follows-meta.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |