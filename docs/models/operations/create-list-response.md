# CreateListResponse

## Example Usage

```typescript
import { CreateListResponse } from "@versedbcom/sdk/models/operations";

let value: CreateListResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                                            | Record<string, *string*[]>                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `result`                                                                                                                                                                                                                                             | [operations.CreateListResponseBody](../../models/operations/create-list-response-body.md)                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  | {<br/>"data": {<br/>"id": 102,<br/>"title": "Best Spider-Man Stories",<br/>"description": "My favorite Spidey moments ranked",<br/>"entity_type": "issues",<br/>"is_ranked": true,<br/>"is_private": false,<br/>"items_count": 0,<br/>"user": {<br/>"id": 123,<br/>"username": "comic_fan"<br/>}<br/>}<br/>} |