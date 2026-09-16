# ViewYourMonthlyReadingCalendarRequest

## Example Usage

```typescript
import { ViewYourMonthlyReadingCalendarRequest } from "@versedbcom/sdk/models/operations";

let value: ViewYourMonthlyReadingCalendarRequest = {
  year: 2026,
  month: 9,
  page: 1,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `year`                                                 | *number*                                               | :heavy_minus_sign:                                     | UTC year; defaults to the current year.                | 2026                                                   |
| `month`                                                | *number*                                               | :heavy_minus_sign:                                     | Month from 1 to 12; defaults to the current UTC month. | 9                                                      |
| `page`                                                 | *number*                                               | :heavy_minus_sign:                                     | Page number, starting at 1.                            | 1                                                      |