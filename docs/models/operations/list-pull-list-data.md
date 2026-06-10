# ListPullListData

## Example Usage

```typescript
import { ListPullListData } from "@versedbcom/sdk/models/operations";

let value: ListPullListData = {
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
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 123                                                                               |
| `series`                                                                          | [operations.ListPullListSeries](../../models/operations/list-pull-list-series.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `addedAt`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 2024-01-15T10:30:00Z                                                              |