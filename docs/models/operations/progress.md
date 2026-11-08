# Progress

## Example Usage

```typescript
import { Progress } from "@versedbcom/sdk/models/operations";

let value: Progress = {
  year: 2026,
  target: 12,
  readCount: 0,
  percent: 0,
  completed: false,
  expectedReads: 8,
  paceDifference: -8,
  remaining: 12,
  readsPerWeek: 1,
  editable: true,
  lastYearReads: 0,
  suggestedTarget: 12,
  timezone: "UTC",
  isPublic: false,
  notifyMilestones: false,
  notifyLapses: false,
  emailUpdates: false,
  shareUrl: "https://versedb.com/user/reader/2026",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `year`                                | *number*                              | :heavy_check_mark:                    | N/A                                   | 2026                                  |
| `target`                              | *number*                              | :heavy_check_mark:                    | N/A                                   | 12                                    |
| `readCount`                           | *number*                              | :heavy_check_mark:                    | N/A                                   | 0                                     |
| `percent`                             | *number*                              | :heavy_check_mark:                    | N/A                                   | 0                                     |
| `completed`                           | *boolean*                             | :heavy_check_mark:                    | N/A                                   | false                                 |
| `expectedReads`                       | *number*                              | :heavy_check_mark:                    | N/A                                   | 8                                     |
| `paceDifference`                      | *number*                              | :heavy_check_mark:                    | N/A                                   | -8                                    |
| `remaining`                           | *number*                              | :heavy_check_mark:                    | N/A                                   | 12                                    |
| `readsPerWeek`                        | *number*                              | :heavy_check_mark:                    | N/A                                   | 1                                     |
| `editable`                            | *boolean*                             | :heavy_check_mark:                    | N/A                                   | true                                  |
| `lastYearReads`                       | *number*                              | :heavy_check_mark:                    | N/A                                   | 0                                     |
| `suggestedTarget`                     | *number*                              | :heavy_check_mark:                    | N/A                                   | 12                                    |
| `timezone`                            | *string*                              | :heavy_check_mark:                    | N/A                                   | UTC                                   |
| `isPublic`                            | *boolean*                             | :heavy_check_mark:                    | N/A                                   | false                                 |
| `notifyMilestones`                    | *boolean*                             | :heavy_minus_sign:                    | Left out for a `read:showcase` token. | false                                 |
| `notifyLapses`                        | *boolean*                             | :heavy_minus_sign:                    | Left out for a `read:showcase` token. | false                                 |
| `emailUpdates`                        | *boolean*                             | :heavy_minus_sign:                    | Left out for a `read:showcase` token. | false                                 |
| `shareUrl`                            | *string*                              | :heavy_check_mark:                    | N/A                                   | https://versedb.com/user/reader/2026  |