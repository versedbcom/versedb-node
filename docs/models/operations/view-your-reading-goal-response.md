# ViewYourReadingGoalResponse

## Example Usage

```typescript
import { ViewYourReadingGoalResponse } from "@versedbcom/sdk/models/operations";

let value: ViewYourReadingGoalResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [operations.ViewYourReadingGoalResponseBody](../../models/operations/view-your-reading-goal-response-body.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |