# GetCharactersForASpecificTeammembersRequest

## Example Usage

```typescript
import { GetCharactersForASpecificTeammembersRequest } from "@versedbcom/sdk/models/operations";

let value: GetCharactersForASpecificTeammembersRequest = {
  teamId: 78,
  q: "uncanny",
  sort: "cached_issues_count",
  direction: "desc",
  limit: 20,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `teamId`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the team.                                                                                    | 78                                                                                                     |
| `q`                                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Optional search within the team's members. Results come back in relevance order unless sort is passed. | uncanny                                                                                                |
| `sort`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Sort field (name, cached_issues_count, joined_date). Defaults to name.                                 | cached_issues_count                                                                                    |
| `direction`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Sort direction (asc, desc).                                                                            | desc                                                                                                   |
| `limit`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Number of results per page (max 50).                                                                   | 20                                                                                                     |
| `page`                                                                                                 | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Page number; meta.last_page says where the list ends.                                                  | 1                                                                                                      |
| `languages`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes.   | ja,ko                                                                                                  |