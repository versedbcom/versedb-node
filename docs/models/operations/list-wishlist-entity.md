# ListWishlistEntity

## Example Usage

```typescript
import { ListWishlistEntity } from "@versedbcom/sdk/models/operations";

let value: ListWishlistEntity = {
  id: 5432,
  name: "Amazing Spider-Man #1",
  issueNumber: "1",
  publisher: "Marvel",
  series: {
    id: 123,
    name: "Amazing Spider-Man",
    startYear: 2018,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 5432                                                                             |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Amazing Spider-Man #1                                                            |
| `issueNumber`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 1                                                                                |
| `imageUrl`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | ...                                                                              |
| `publisher`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Marvel                                                                           |
| `series`                                                                         | [operations.ListWishlistSeries](../../models/operations/list-wishlist-series.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |