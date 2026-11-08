# ListWishlistEntity

Left out once the issue is gone.

## Example Usage

```typescript
import { ListWishlistEntity } from "@versedbcom/sdk/models/operations";

let value: ListWishlistEntity = {
  id: 5432,
  slug: "amazing-spider-man-1",
  name: "Amazing Spider-Man #1",
  issueNumber: "1",
  releaseDate: "2018-07-11",
  focDate: "2018-06-18",
  imageUrl: "https://...-cover_md.webp",
  isNsfw: false,
  publisher: "Marvel",
  series: {
    id: 123,
    name: "Amazing Spider-Man",
    slug: "amazing-spider-man-2018",
    startYear: 2018,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 5432                                                                             |
| `slug`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | amazing-spider-man-1                                                             |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | Amazing Spider-Man #1                                                            |
| `issueNumber`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `releaseDate`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 2018-07-11                                                                       |
| `focDate`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 2018-06-18                                                                       |
| `imageUrl`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | https://...-cover_md.webp                                                        |
| `isNsfw`                                                                         | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `publisher`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | Marvel                                                                           |
| `series`                                                                         | [operations.ListWishlistSeries](../../models/operations/list-wishlist-series.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |