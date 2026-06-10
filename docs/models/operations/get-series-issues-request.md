# GetSeriesIssuesRequest

## Example Usage

```typescript
import { GetSeriesIssuesRequest } from "@versedbcom/sdk/models/operations";

let value: GetSeriesIssuesRequest = {
  id: 123,
  sort: "issue_number",
  direction: "asc",
  limit: 20,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *number*                                                   | :heavy_check_mark:                                         | The series ID.                                             | 123                                                        |
| `sort`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Sort field (issue_number, release_date, created_at, name). | issue_number                                               |
| `direction`                                                | *string*                                                   | :heavy_minus_sign:                                         | Sort direction (asc, desc).                                | asc                                                        |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Results per page (max 100).                                | 20                                                         |