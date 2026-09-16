# ViewYearlyReadingStatisticsResponseBody

Success.

## Example Usage

```typescript
import { ViewYearlyReadingStatisticsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ViewYearlyReadingStatisticsResponseBody = {
  data: {
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
  },
  years: [
    2026,
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.ViewYearlyReadingStatisticsData](../../models/operations/view-yearly-reading-statistics-data.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `years`                                                                                                      | *number*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | [<br/>2026<br/>]                                                                                             |