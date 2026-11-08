# ViewYourMonthlyReadingCalendarResponse

## Example Usage

```typescript
import { ViewYourMonthlyReadingCalendarResponse } from "@versedbcom/sdk/models/operations";

let value: ViewYourMonthlyReadingCalendarResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    data: [
      {
        id: 5678,
        date: "2026-09-14",
        name: "Saga (2012) #1",
        url: "https://versedb.com/issue/5678/saga-1",
        cover: "https://...-cover_sm.webp",
      },
    ],
    currentPage: 1,
    lastPage: 1,
    total: 0,
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                            | Record<string, *string*[]>                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `result`                                                                                                                             | [operations.ViewYourMonthlyReadingCalendarResponseBody](../../models/operations/view-your-monthly-reading-calendar-response-body.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |