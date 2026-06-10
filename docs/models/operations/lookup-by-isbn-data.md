# LookupByISBNData

## Example Usage

```typescript
import { LookupByISBNData } from "@versedbcom/sdk/models/operations";

let value: LookupByISBNData = {
  id: 8765,
  slug: "spider-man-life-story-tp",
  seriesId: 456,
  titleId: 45,
  issueNumber: "1",
  name: "Spider-Man: Life Story TP",
  description: "A story of Peter Parker...",
  releaseDate: "2019-10-02",
  isbn: "978-1302913847",
  format: "trade_paperback",
  series: {
    id: 456,
    name: "Spider-Man: Life Story",
    slug: "spider-man-life-story",
  },
  publisher: {
    id: 1,
    name: "Marvel",
    slug: "marvel",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 8765                                                                                    |
| `slug`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | spider-man-life-story-tp                                                                |
| `seriesId`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 456                                                                                     |
| `titleId`                                                                               | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 45                                                                                      |
| `issueNumber`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 1                                                                                       |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | Spider-Man: Life Story TP                                                               |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | A story of Peter Parker...                                                              |
| `releaseDate`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 2019-10-02                                                                              |
| `isbn`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 978-1302913847                                                                          |
| `format`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | trade_paperback                                                                         |
| `series`                                                                                | [operations.LookupByISBNSeries](../../models/operations/lookup-by-isbn-series.md)       | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |
| `publisher`                                                                             | [operations.LookupByISBNPublisher](../../models/operations/lookup-by-isbn-publisher.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |