# ListReadStatusResponseBody

Success

## Example Usage

```typescript
import { ListReadStatusResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListReadStatusResponseBody = {
  data: [
    {
      id: 1234,
      issue: {
        id: 5432,
        number: "1",
        title: "First Issue",
      },
      series: {
        id: 123,
        name: "Amazing Spider-Man",
      },
      variantId: null,
      readAt: "2024-01-15T10:30:00Z",
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 10,
    perPage: 20,
    total: 200,
  },
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                                           | [operations.ListReadStatusData](../../models/operations/list-read-status-data.md)[]                                                                                                              | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              | [<br/>{<br/>"id": 1234,<br/>"issue": {<br/>"id": 5432,<br/>"number": "1",<br/>"title": "First Issue"<br/>},<br/>"series": {<br/>"id": 123,<br/>"name": "Amazing Spider-Man"<br/>},<br/>"variant_id": null,<br/>"read_at": "2024-01-15T10:30:00Z"<br/>}<br/>] |
| `meta`                                                                                                                                                                                           | [operations.ListReadStatusMeta](../../models/operations/list-read-status-meta.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |