# ViewYearlyReadingStatisticsData

## Example Usage

```typescript
import { ViewYearlyReadingStatisticsData } from "@versedbcom/sdk/models/operations";

let value: ViewYearlyReadingStatisticsData = {
  progress: {
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
  days: [
    {
      date: "2026-01-01",
      count: 0,
      total: 0,
      expected: 0.032876712328767,
    },
  ],
  months: {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
  },
  breakdowns: {
    series: [],
    publishers: [],
    creators: [],
    characters: [],
  },
  activeDays: 0,
  longestStreak: 0,
  currentStreak: 0,
  projectedReads: 0,
  projectedFinish: null,
  thisWeek: 0,
  thisMonth: 0,
  monthlyTarget: 3,
  busiestMonth: null,
  finishedSeries: [],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `progress`                                                                          | [operations.Progress](../../models/operations/progress.md)                          | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |
| `days`                                                                              | [operations.Day](../../models/operations/day.md)[]                                  | :heavy_minus_sign:                                                                  | N/A                                                                                 | [<br/>{<br/>"date": "2026-01-01",<br/>"count": 0,<br/>"total": 0,<br/>"expected": 0.032876712328767<br/>}<br/>] |
| `months`                                                                            | [operations.Months](../../models/operations/months.md)                              | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |
| `breakdowns`                                                                        | [operations.Breakdowns](../../models/operations/breakdowns.md)                      | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |
| `activeDays`                                                                        | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 0                                                                                   |
| `longestStreak`                                                                     | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 0                                                                                   |
| `currentStreak`                                                                     | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 0                                                                                   |
| `projectedReads`                                                                    | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 0                                                                                   |
| `projectedFinish`                                                                   | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | null                                                                                |
| `thisWeek`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 0                                                                                   |
| `thisMonth`                                                                         | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 0                                                                                   |
| `monthlyTarget`                                                                     | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 3                                                                                   |
| `busiestMonth`                                                                      | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | null                                                                                |
| `finishedSeries`                                                                    | *any*[]                                                                             | :heavy_minus_sign:                                                                  | N/A                                                                                 | []                                                                                  |