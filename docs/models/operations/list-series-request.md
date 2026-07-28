# ListSeriesRequest

## Example Usage

```typescript
import { ListSeriesRequest } from "@versedbcom/sdk/models/operations";

let value: ListSeriesRequest = {
  q: "spider-man",
  titleId: 1,
  publisherId: 1,
  status: "Ongoing",
  sort: "start_year",
  direction: "desc",
  limit: 20,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `q`                                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | Search by series name.                                                                   | spider-man                                                                               |
| `titleId`                                                                                | *number*                                                                                 | :heavy_minus_sign:                                                                       | Filter by title ID.                                                                      | 1                                                                                        |
| `publisherId`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | Filter by publisher ID.                                                                  | 1                                                                                        |
| `status`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | Filter by series status (Ongoing, Completed, Canceled).                                  | Ongoing                                                                                  |
| `sort`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Sort field (name, start_year, average_rating, latest_release_date, cached_issues_count). | start_year                                                                               |
| `direction`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Sort direction (asc, desc).                                                              | desc                                                                                     |
| `limit`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of results per page (max 50).                                                     | 20                                                                                       |