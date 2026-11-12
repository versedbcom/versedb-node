# MarkAsReadResponseBody

Success. `series_completed` is there when this read finishes the series.

## Example Usage

```typescript
import { MarkAsReadResponseBody } from "@versedbcom/sdk/models/operations";

let value: MarkAsReadResponseBody = {
  readAt: "2026-03-01T00:00:00+00:00",
  seriesCompleted: {
    seriesId: 123,
    seriesName: "Saga",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `readAt`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The read's date; null when it has none.                                   | 2026-03-01T00:00:00+00:00                                                 |
| `seriesCompleted`                                                         | [operations.SeriesCompleted](../../models/operations/series-completed.md) | :heavy_minus_sign:                                                        | Every live issue of the series is now read.                               |                                                                           |