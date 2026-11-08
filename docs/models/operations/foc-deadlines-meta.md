# FOCDeadlinesMeta

## Example Usage

```typescript
import { FOCDeadlinesMeta } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesMeta = {
  currentPage: 1,
  perPage: 10,
  total: 28,
  lastPage: 3,
  focWindowDays: 7,
  focStart: "2026-03-15",
  focEnd: "2026-03-22",
  sort: "foc_date",
  note: "FOC dates are estimates based on release_date - 14 days",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `currentPage`                                           | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 1                                                       |
| `perPage`                                               | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 10                                                      |
| `total`                                                 | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 28                                                      |
| `lastPage`                                              | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 3                                                       |
| `focWindowDays`                                         | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 7                                                       |
| `focStart`                                              | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | 2026-03-15                                              |
| `focEnd`                                                | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | 2026-03-22                                              |
| `sort`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | foc_date                                                |
| `note`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | FOC dates are estimates based on release_date - 14 days |