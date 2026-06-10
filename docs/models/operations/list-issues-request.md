# ListIssuesRequest

## Example Usage

```typescript
import { ListIssuesRequest } from "@versedbcom/sdk/models/operations";

let value: ListIssuesRequest = {
  q: "origin",
  seriesId: 123,
  publisherId: 1,
  releaseDateFrom: "2024-01-01",
  releaseDateTo: "2024-12-31",
  include: "series",
  sort: "release_date",
  direction: "desc",
  limit: 20,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `q`                                                        | *string*                                                   | :heavy_minus_sign:                                         | Search by issue name.                                      | origin                                                     |
| `seriesId`                                                 | *number*                                                   | :heavy_minus_sign:                                         | Filter by series ID.                                       | 123                                                        |
| `publisherId`                                              | *number*                                                   | :heavy_minus_sign:                                         | Filter by publisher ID (via series relationship).          | 1                                                          |
| `releaseDateFrom`                                          | *string*                                                   | :heavy_minus_sign:                                         | Filter by release date (from).                             | 2024-01-01                                                 |
| `releaseDateTo`                                            | *string*                                                   | :heavy_minus_sign:                                         | Filter by release date (to).                               | 2024-12-31                                                 |
| `include`                                                  | *string*                                                   | :heavy_minus_sign:                                         | Comma-separated relationships to include (series).         | series                                                     |
| `sort`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Sort field (issue_number, release_date, created_at, name). | release_date                                               |
| `direction`                                                | *string*                                                   | :heavy_minus_sign:                                         | Sort direction (asc, desc).                                | desc                                                       |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Results per page (max 100).                                | 20                                                         |