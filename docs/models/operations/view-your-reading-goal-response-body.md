# ViewYourReadingGoalResponseBody

Success

## Example Usage

```typescript
import { ViewYourReadingGoalResponseBody } from "@versedbcom/sdk/models/operations";

let value: ViewYourReadingGoalResponseBody = {
  data: {
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
  },
  years: [
    2026,
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.ViewYourReadingGoalData](../../models/operations/view-your-reading-goal-data.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `years`                                                                                      | *number*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |