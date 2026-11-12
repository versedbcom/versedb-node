# ListFollowsResponse

## Example Usage

```typescript
import { ListFollowsResponse } from "@versedbcom/sdk/models/operations";

let value: ListFollowsResponse = {
  headers: {},
  result: {
    data: [
      {
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
      },
    ],
    links: {
      first: "<value>",
      last: "<value>",
      prev: "<value>",
      next: null,
    },
    meta: {
      currentPage: 1,
      from: 1,
      lastPage: 25,
      links: [],
      path: "/opt/sbin",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [operations.ListFollowsResponseBody](../../models/operations/list-follows-response-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |