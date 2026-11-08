# GetSeriesIssuesMeta

## Example Usage

```typescript
import { GetSeriesIssuesMeta } from "@versedbcom/sdk/models/operations";

let value: GetSeriesIssuesMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://impressionable-agreement.biz",
      label: "<value>",
      active: true,
    },
  ],
  path: "/usr/libdata",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `currentPage`                                                                         | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 1                                                                                     |
| `from`                                                                                | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 1                                                                                     |
| `lastPage`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 25                                                                                    |
| `links`                                                                               | [operations.GetSeriesIssuesLink](../../models/operations/get-series-issues-link.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `path`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `perPage`                                                                             | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 20                                                                                    |
| `to`                                                                                  | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 20                                                                                    |
| `total`                                                                               | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 500                                                                                   |