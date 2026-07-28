# AddItemToListDataEntity

## Example Usage

```typescript
import { AddItemToListDataEntity } from "@versedbcom/sdk/models/operations";

let value: AddItemToListDataEntity = {
  id: 5432,
  slug: "the-amazing-spider-man-1",
  name: "The Amazing Spider-Man #1",
  issueNumber: "1",
  releaseDate: "2018-07-11",
  imageUrl: "https://cdn.versedb.com/issues/5432/cover_md.webp",
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 5432                                                                                          |
| `slug`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | the-amazing-spider-man-1                                                                      |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | The Amazing Spider-Man #1                                                                     |
| `issueNumber`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `releaseDate`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2018-07-11                                                                                    |
| `imageUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | https://cdn.versedb.com/issues/5432/cover_md.webp                                             |
| `isNsfw`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | false                                                                                         |
| `publisher`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Marvel Comics                                                                                 |
| `series`                                                                                      | [operations.AddItemToListDataSeries](../../models/operations/add-item-to-list-data-series.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |