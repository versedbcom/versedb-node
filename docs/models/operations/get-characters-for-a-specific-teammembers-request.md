# GetCharactersForASpecificTeammembersRequest

## Example Usage

```typescript
import { GetCharactersForASpecificTeammembersRequest } from "@versedbcom/sdk/models/operations";

let value: GetCharactersForASpecificTeammembersRequest = {
  teamId: 17123,
  q: "wolverine",
  sort: "cached_issues_count",
  direction: "desc",
  limit: 20,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `teamId`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the team.                                                                                    | 17123                                                                                                  |
| `q`                                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Optional search within the team's members. Results come back in relevance order unless sort is passed. | wolverine                                                                                              |
| `sort`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Sort field (name, cached_issues_count, joined_date). Defaults to name.                                 | cached_issues_count                                                                                    |
| `direction`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Sort direction (asc, desc). Defaults to asc for name and desc for the others.                          | desc                                                                                                   |
| `limit`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Number of results per page (max 50).                                                                   | 20                                                                                                     |