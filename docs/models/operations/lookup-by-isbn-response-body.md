# LookupByISBNResponseBody

Success

## Example Usage

```typescript
import { LookupByISBNResponseBody } from "@versedbcom/sdk/models/operations";

let value: LookupByISBNResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [operations.LookupByISBNData](../../models/operations/lookup-by-isbn-data.md) | :heavy_minus_sign:                                                            | N/A                                                                           |