# GetIssuesForASpecificTeamResponseBody

Success

## Example Usage

```typescript
import { GetIssuesForASpecificTeamResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssuesForASpecificTeamResponseBody = {
  data: [
    {
      id: 5432,
      seriesId: 123,
      issueNumber: "1",
      name: "The Final Host",
      releaseDate: "2018-05-02",
      coverDate: "2018-07-01",
      averageRating: 4.3,
      isNsfw: false,
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 25,
    perPage: 50,
    total: 1250,
  },
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                 | [operations.GetIssuesForASpecificTeamData](../../models/operations/get-issues-for-a-specific-team-data.md)[]                                                                           | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    | [<br/>{<br/>"id": 5432,<br/>"series_id": 123,<br/>"issue_number": "1",<br/>"name": "The Final Host",<br/>"release_date": "2018-05-02",<br/>"cover_date": "2018-07-01",<br/>"average_rating": 4.3,<br/>"is_nsfw": false<br/>}<br/>] |
| `meta`                                                                                                                                                                                 | [operations.GetIssuesForASpecificTeamMeta](../../models/operations/get-issues-for-a-specific-team-meta.md)                                                                             | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    |                                                                                                                                                                                        |