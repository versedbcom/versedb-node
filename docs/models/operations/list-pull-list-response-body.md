# ListPullListResponseBody

Success

## Example Usage

```typescript
import { ListPullListResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListPullListResponseBody = {
  data: [
    {
      id: 123,
      series: {
        id: 456,
        name: "Amazing Spider-Man",
        publisher: {
          id: 1,
          name: "Marvel",
        },
      },
      addedAt: "2024-01-15T10:30:00Z",
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 2,
    perPage: 20,
    total: 35,
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                       | [operations.ListPullListData](../../models/operations/list-pull-list-data.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          | [<br/>{<br/>"id": 123,<br/>"series": {<br/>"id": 456,<br/>"name": "Amazing Spider-Man",<br/>"publisher": {<br/>"id": 1,<br/>"name": "Marvel"<br/>},<br/>"cover_url": "..."<br/>},<br/>"added_at": "2024-01-15T10:30:00Z"<br/>}<br/>] |
| `meta`                                                                                                                                                                       | [operations.ListPullListMeta](../../models/operations/list-pull-list-meta.md)                                                                                                | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          |                                                                                                                                                                              |