# FOCDeadlinesMeta

## Example Usage

```typescript
import { FOCDeadlinesMeta } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesMeta = {
  focWindowDays: 7,
  focStart: "2024-01-15",
  focEnd: "2024-01-22",
  note: "FOC dates are estimates based on release_date - 14 days",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `focWindowDays`                                         | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     | 7                                                       |
| `focStart`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | 2024-01-15                                              |
| `focEnd`                                                | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | 2024-01-22                                              |
| `note`                                                  | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | FOC dates are estimates based on release_date - 14 days |