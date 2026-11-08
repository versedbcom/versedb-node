# ViewYourMonthlyReadingCalendarResponseBody

Success

## Example Usage

```typescript
import { ViewYourMonthlyReadingCalendarResponseBody } from "@versedbcom/sdk/models/operations";

let value: ViewYourMonthlyReadingCalendarResponseBody = {
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
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                | [operations.ViewYourMonthlyReadingCalendarData](../../models/operations/view-your-monthly-reading-calendar-data.md)[] | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `currentPage`                                                                                                         | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | 1                                                                                                                     |
| `lastPage`                                                                                                            | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | 1                                                                                                                     |
| `total`                                                                                                               | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | 0                                                                                                                     |