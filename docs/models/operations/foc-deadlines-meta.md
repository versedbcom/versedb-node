# FOCDeadlinesMeta

## Example Usage

```typescript
import { FOCDeadlinesMeta } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesMeta = {
  currentPage: 1,
  lastPage: 3,
  perPage: 10,
  total: 28,
  focWindowDays: 7,
  focStart: "2024-01-15",
  focEnd: "2024-01-22",
  note: "FOC dates are estimates based on release_date - 14 days",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `currentPage`                                           | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     | 1                                                       |
| `lastPage`                                              | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     | 3                                                       |
| `perPage`                                               | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     | 10                                                      |
| `total`                                                 | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     | 28                                                      |
| `focWindowDays`                                         | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     | 7                                                       |
| `focStart`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | 2024-01-15                                              |
| `focEnd`                                                | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | 2024-01-22                                              |
| `note`                                                  | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | FOC dates are estimates based on release_date - 14 days |