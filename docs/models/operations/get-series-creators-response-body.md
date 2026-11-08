# GetSeriesCreatorsResponseBody

Success

## Example Usage

```typescript
import { GetSeriesCreatorsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCreatorsResponseBody = {
  currentPage: 1,
  data: [],
  firstPageUrl: "https://unwieldy-skeleton.com",
  from: 1,
  lastPage: 1,
  lastPageUrl: "https://silky-nun.com/",
  links: [
    {
      url: "https://infatuated-knuckle.org",
      label: "<value>",
      active: true,
    },
  ],
  nextPageUrl: "https://monthly-collaboration.net",
  path: "/System",
  perPage: 50,
  prevPageUrl: "https://dapper-settler.info/",
  to: 15,
  total: 15,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `currentPage`                                                                             | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 1                                                                                         |
| `data`                                                                                    | [operations.GetSeriesCreatorsData](../../models/operations/get-series-creators-data.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `firstPageUrl`                                                                            | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `from`                                                                                    | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 1                                                                                         |
| `lastPage`                                                                                | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 1                                                                                         |
| `lastPageUrl`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `links`                                                                                   | [operations.GetSeriesCreatorsLink](../../models/operations/get-series-creators-link.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `nextPageUrl`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `path`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `perPage`                                                                                 | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 50                                                                                        |
| `prevPageUrl`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `to`                                                                                      | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 15                                                                                        |
| `total`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 15                                                                                        |