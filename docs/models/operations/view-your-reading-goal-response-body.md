# ViewYourReadingGoalResponseBody

Success.

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
    shareUrl: null,
  },
  years: [
    2026,
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.ViewYourReadingGoalData](../../models/operations/view-your-reading-goal-data.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `years`                                                                                      | *number*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          | [<br/>2026<br/>]                                                                             |