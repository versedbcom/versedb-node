# GetSeriesIssuesResponseBody

Success

## Example Usage

```typescript
import { GetSeriesIssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesIssuesResponseBody = {
  data: [
    {
      id: 5432,
      number: "1",
      name: "The Amazing Spider-Man #1",
      releaseDate: "2018-07-11",
      coverUrl: "https://...",
      averageRating: 4.5,
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 4,
    perPage: 20,
    total: 75,
  },
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                  | [operations.GetSeriesIssuesData](../../models/operations/get-series-issues-data.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | [<br/>{<br/>"id": 5432,<br/>"number": "1",<br/>"name": "The Amazing Spider-Man #1",<br/>"release_date": "2018-07-11",<br/>"cover_url": "https://...",<br/>"average_rating": 4.5<br/>}<br/>] |
| `meta`                                                                                                                                                  | [operations.GetSeriesIssuesMeta](../../models/operations/get-series-issues-meta.md)                                                                     | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |