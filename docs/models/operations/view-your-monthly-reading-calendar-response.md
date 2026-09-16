# ViewYourMonthlyReadingCalendarResponse

## Example Usage

```typescript
import { ViewYourMonthlyReadingCalendarResponse } from "@versedbcom/sdk/models/operations";

let value: ViewYourMonthlyReadingCalendarResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    data: [],
    currentPage: 1,
    lastPage: 1,
    total: 0,
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                            | Record<string, *string*[]>                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `result`                                                                                                                             | [operations.ViewYourMonthlyReadingCalendarResponseBody](../../models/operations/view-your-monthly-reading-calendar-response-body.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  | {<br/>"data": [],<br/>"current_page": 1,<br/>"last_page": 1,<br/>"total": 0<br/>}                                                    |