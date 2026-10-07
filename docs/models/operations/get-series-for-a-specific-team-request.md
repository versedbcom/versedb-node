# GetSeriesForASpecificTeamRequest

## Example Usage

```typescript
import { GetSeriesForASpecificTeamRequest } from "@versedbcom/sdk/models/operations";

let value: GetSeriesForASpecificTeamRequest = {
  teamId: 10,
  q: "uncanny",
  sort: "start_year",
  direction: "desc",
  limit: 20,
  medium: "comic,manga",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The team ID.                                                                                                     | 10                                                                                                               |
| `q`                                                                                                              | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Optional search within the team's series. Results come back in relevance order unless sort is passed.            | uncanny                                                                                                          |
| `sort`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Sort field (start_year, name, cached_issues_count, average_rating, latest_release_date). Defaults to start_year. | start_year                                                                                                       |
| `direction`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Sort direction (asc, desc). Defaults to asc for name and desc for the others.                                    | desc                                                                                                             |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of results per page (max 50).                                                                             | 20                                                                                                               |
| `medium`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Comma-separated series mediums to filter by (comic, manga, manhwa, manhua, bande_dessinee, magazine).            | comic,manga                                                                                                      |