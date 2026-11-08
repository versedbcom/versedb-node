# GetIssuesForASpecificTeamMeta

## Example Usage

```typescript
import { GetIssuesForASpecificTeamMeta } from "@versedbcom/sdk/models/operations";

let value: GetIssuesForASpecificTeamMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://steep-lifestyle.com/",
      label: "<value>",
      active: true,
    },
  ],
  path: "/usr/lib",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `currentPage`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 1                                                                                                            |
| `from`                                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 1                                                                                                            |
| `lastPage`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 25                                                                                                           |
| `links`                                                                                                      | [operations.GetIssuesForASpecificTeamLink](../../models/operations/get-issues-for-a-specific-team-link.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `path`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `perPage`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 20                                                                                                           |
| `to`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 20                                                                                                           |
| `total`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 500                                                                                                          |