# EntityConflict1

An issue.

## Example Usage

```typescript
import { EntityConflict1 } from "@versedbcom/sdk/models/operations";

let value: EntityConflict1 = {
  id: 5432,
  slug: "the-amazing-spider-man-1",
  name: "The Amazing Spider-Man #1",
  issueNumber: "1",
  releaseDate: "2018-07-11",
  focDate: "2018-06-18",
  imageUrl: "https://...-cover_md.webp",
  isNsfw: false,
  publisher: "Marvel Comics",
  series: {
    id: 88,
    name: "The Amazing Spider-Man",
    slug: "the-amazing-spider-man",
    startYear: 2018,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | 5432                                                                    |
| `slug`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | the-amazing-spider-man-1                                                |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | The Amazing Spider-Man #1                                               |
| `issueNumber`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | 1                                                                       |
| `releaseDate`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | 2018-07-11                                                              |
| `focDate`                                                               | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | 2018-06-18                                                              |
| `imageUrl`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | https://...-cover_md.webp                                               |
| `isNsfw`                                                                | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `publisher`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | Marvel Comics                                                           |
| `series`                                                                | [operations.ConflictSeries](../../models/operations/conflict-series.md) | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |