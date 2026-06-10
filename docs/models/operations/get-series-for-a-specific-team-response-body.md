# GetSeriesForASpecificTeamResponseBody

Success

## Example Usage

```typescript
import { GetSeriesForASpecificTeamResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesForASpecificTeamResponseBody = {
  data: [
    {
      id: 123,
      titleId: 45,
      name: "Avengers",
      slug: "avengers-2018",
      startYear: 2018,
      endYear: 2023,
      medium: "comic",
      publicationType: "regular_series",
      status: "ended",
      averageRating: 4.1,
      totalReviews: 150,
      isNsfw: false,
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 50,
    total: 12,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                          | [operations.GetSeriesForASpecificTeamData](../../models/operations/get-series-for-a-specific-team-data.md)[]                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             | [<br/>{<br/>"id": 123,<br/>"title_id": 45,<br/>"name": "Avengers",<br/>"slug": "avengers-2018",<br/>"start_year": 2018,<br/>"end_year": 2023,<br/>"medium": "comic",<br/>"publication_type": "regular_series",<br/>"status": "ended",<br/>"average_rating": 4.1,<br/>"total_reviews": 150,<br/>"is_nsfw": false<br/>}<br/>] |
| `meta`                                                                                                                                                                                                                                                          | [operations.GetSeriesForASpecificTeamMeta](../../models/operations/get-series-for-a-specific-team-meta.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                 |