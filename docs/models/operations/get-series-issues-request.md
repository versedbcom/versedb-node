# GetSeriesIssuesRequest

## Example Usage

```typescript
import { GetSeriesIssuesRequest } from "@versedbcom/sdk/models/operations";

let value: GetSeriesIssuesRequest = {
  id: 123,
  q: "247",
  sort: "issue_number",
  direction: "asc",
  limit: 20,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | The series ID.                                                                                       | 123                                                                                                  |
| `q`                                                                                                  | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Search within this series' issues (number, name).                                                    | 247                                                                                                  |
| `sort`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Sort field (issue_number, release_date, name).                                                       | issue_number                                                                                         |
| `direction`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Sort direction (asc, desc).                                                                          | asc                                                                                                  |
| `limit`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Results per page (max 100).                                                                          | 20                                                                                                   |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Page number; meta.last_page says where the list ends.                                                | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |