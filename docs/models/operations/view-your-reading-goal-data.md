# ViewYourReadingGoalData

## Example Usage

```typescript
import { ViewYourReadingGoalData } from "@versedbcom/sdk/models/operations";

let value: ViewYourReadingGoalData = {
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
  shareUrl: null,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `year`             | *number*           | :heavy_minus_sign: | N/A                | 2026               |
| `target`           | *number*           | :heavy_minus_sign: | N/A                | 12                 |
| `readCount`        | *number*           | :heavy_minus_sign: | N/A                | 0                  |
| `percent`          | *number*           | :heavy_minus_sign: | N/A                | 0                  |
| `completed`        | *boolean*          | :heavy_minus_sign: | N/A                | false              |
| `expectedReads`    | *number*           | :heavy_minus_sign: | N/A                | 8                  |
| `paceDifference`   | *number*           | :heavy_minus_sign: | N/A                | -8                 |
| `remaining`        | *number*           | :heavy_minus_sign: | N/A                | 12                 |
| `readsPerWeek`     | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `editable`         | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `lastYearReads`    | *number*           | :heavy_minus_sign: | N/A                | 0                  |
| `suggestedTarget`  | *number*           | :heavy_minus_sign: | N/A                | 12                 |
| `timezone`         | *string*           | :heavy_minus_sign: | N/A                | UTC                |
| `isPublic`         | *boolean*          | :heavy_minus_sign: | N/A                | false              |
| `notifyMilestones` | *boolean*          | :heavy_minus_sign: | N/A                | false              |
| `notifyLapses`     | *boolean*          | :heavy_minus_sign: | N/A                | false              |
| `emailUpdates`     | *boolean*          | :heavy_minus_sign: | N/A                | false              |
| `shareUrl`         | *string*           | :heavy_minus_sign: | N/A                | null               |