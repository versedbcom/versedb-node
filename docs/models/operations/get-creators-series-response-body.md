# GetCreatorsSeriesResponseBody

Success

## Example Usage

```typescript
import { GetCreatorsSeriesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsSeriesResponseBody = {
  data: [
    {
      id: 456,
      name: "Batman",
      slug: "batman",
      startYear: 2016,
      endYear: 2020,
      coverUrl: "https://...",
      cachedIssuesCount: 85,
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 5,
    perPage: 20,
    total: 100,
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                             | [operations.GetCreatorsSeriesData](../../models/operations/get-creators-series-data.md)[]                                                          | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                | [<br/>{<br/>"id": 456,<br/>"name": "Batman",<br/>"slug": "batman",<br/>"start_year": 2016,<br/>"end_year": 2020,<br/>"cover_url": "https://...",<br/>"cached_issues_count": 85<br/>}<br/>] |
| `meta`                                                                                                                                             | [operations.GetCreatorsSeriesMeta](../../models/operations/get-creators-series-meta.md)                                                            | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |