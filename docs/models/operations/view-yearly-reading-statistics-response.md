# ViewYearlyReadingStatisticsResponse

## Example Usage

```typescript
import { ViewYearlyReadingStatisticsResponse } from "@versedbcom/sdk/models/operations";

let value: ViewYearlyReadingStatisticsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
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
        shareUrl: "https://versedb.com/user/reader/2026",
      },
      days: [
        {
          date: "2026-01-01",
          count: 0,
          total: 0,
          expected: 0.03287671232876712,
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
    },
    years: [
      2026,
    ],
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [operations.ViewYearlyReadingStatisticsResponseBody](../../models/operations/view-yearly-reading-statistics-response-body.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |