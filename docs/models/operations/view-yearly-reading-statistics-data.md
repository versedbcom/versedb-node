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
    shareUrl: "https://versedb.com/user/reader/2026",
  },
  days: [],
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
    publishers: [
      {
        id: 42,
        name: "Saga",
        total: 3,
      },
    ],
    creators: [],
    genres: [
      {
        id: 42,
        name: "Saga",
        total: 3,
      },
    ],
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
  finishedSeries: [
    {
      id: 42,
      name: "Saga",
      total: 54,
      finishedAt: "2026-03-01 10:00:00",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `progress`                                                            | [operations.Progress](../../models/operations/progress.md)            | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `days`                                                                | [operations.Day](../../models/operations/day.md)[]                    | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `months`                                                              | [operations.Months](../../models/operations/months.md)                | :heavy_check_mark:                                                    | Reads in each month, keyed 1 to 12.                                   |                                                                       |
| `breakdowns`                                                          | [operations.Breakdowns](../../models/operations/breakdowns.md)        | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `activeDays`                                                          | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 0                                                                     |
| `longestStreak`                                                       | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 0                                                                     |
| `currentStreak`                                                       | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 0                                                                     |
| `projectedReads`                                                      | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 0                                                                     |
| `projectedFinish`                                                     | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | null                                                                  |
| `thisWeek`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 0                                                                     |
| `thisMonth`                                                           | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 0                                                                     |
| `monthlyTarget`                                                       | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 3                                                                     |
| `busiestMonth`                                                        | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | null                                                                  |
| `finishedSeries`                                                      | [operations.FinishedSery](../../models/operations/finished-sery.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |