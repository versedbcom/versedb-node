# ListReadStatusData

## Example Usage

```typescript
import { ListReadStatusData } from "@versedbcom/sdk/models/operations";

let value: ListReadStatusData = {
  id: 1234,
  issue: {
    id: 5432,
    number: "1",
    title: "First Issue",
  },
  series: {
    id: 123,
    name: "Amazing Spider-Man",
  },
  variantId: null,
  readAt: "2024-01-15T10:30:00Z",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1234                                                                                  |
| `issue`                                                                               | [operations.ListReadStatusIssue](../../models/operations/list-read-status-issue.md)   | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `series`                                                                              | [operations.ListReadStatusSeries](../../models/operations/list-read-status-series.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `variantId`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | null                                                                                  |
| `readAt`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 2024-01-15T10:30:00Z                                                                  |