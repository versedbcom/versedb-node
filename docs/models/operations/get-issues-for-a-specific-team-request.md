# GetIssuesForASpecificTeamRequest

## Example Usage

```typescript
import { GetIssuesForASpecificTeamRequest } from "@versedbcom/sdk/models/operations";

let value: GetIssuesForASpecificTeamRequest = {
  teamId: 10,
  q: "uncanny",
  sort: "release_date",
  direction: "desc",
  limit: 20,
  medium: "comic,manga",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                              | *number*                                                                                              | :heavy_check_mark:                                                                                    | The team ID.                                                                                          | 10                                                                                                    |
| `q`                                                                                                   | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Optional search within the team's issues. Results come back in relevance order unless sort is passed. | uncanny                                                                                               |
| `sort`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Sort field (release_date, cover_date, average_rating). Defaults to release_date.                      | release_date                                                                                          |
| `direction`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Sort direction (asc, desc). Defaults to desc.                                                         | desc                                                                                                  |
| `limit`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Number of results per page (max 50).                                                                  | 20                                                                                                    |
| `medium`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Comma-separated series mediums to filter by (comic, manga, manhwa, manhua, bande_dessinee, magazine). | comic,manga                                                                                           |