# GetCreatorsIssuesResponseBody

Success

## Example Usage

```typescript
import { GetCreatorsIssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsIssuesResponseBody = {
  data: [
    {
      id: 123,
      slug: "batman-1",
      seriesId: 456,
      issueNumber: "1",
      name: "Batman #1",
      releaseDate: "2023-01-15",
      coverUrl: "https://...",
      series: {
        id: 456,
        name: "Batman",
        slug: "batman",
      },
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

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              | Example                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                                                                   | [operations.GetCreatorsIssuesData](../../models/operations/get-creators-issues-data.md)[]                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      | [<br/>{<br/>"id": 123,<br/>"slug": "batman-1",<br/>"series_id": 456,<br/>"issue_number": "1",<br/>"name": "Batman #1",<br/>"release_date": "2023-01-15",<br/>"cover_url": "https://...",<br/>"series": {<br/>"id": 456,<br/>"name": "Batman",<br/>"slug": "batman"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                                                                   | [operations.GetCreatorsIssuesMeta](../../models/operations/get-creators-issues-meta.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |                                                                                                                                                                                                                          |