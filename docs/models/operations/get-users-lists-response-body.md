# GetUsersListsResponseBody

Success

## Example Usage

```typescript
import { GetUsersListsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetUsersListsResponseBody = {
  data: [
    {
      id: 101,
      title: "My Reading List",
      entityType: "issues",
      itemsCount: 15,
      isPrivate: false,
      user: {
        id: 123,
        username: "comic_fan",
      },
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 20,
    total: 5,
  },
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    | Example                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                         | [operations.GetUsersListsData](../../models/operations/get-users-lists-data.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            | [<br/>{<br/>"id": 101,<br/>"title": "My Reading List",<br/>"entity_type": "issues",<br/>"items_count": 15,<br/>"is_private": false,<br/>"user": {<br/>"id": 123,<br/>"username": "comic_fan"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                         | [operations.GetUsersListsMeta](../../models/operations/get-users-lists-meta.md)                                                                                | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |                                                                                                                                                                |