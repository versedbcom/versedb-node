# MarkAsReadResponseBody

Success. `series_completed` is there when this read finishes the series.

## Example Usage

```typescript
import { MarkAsReadResponseBody } from "@versedbcom/sdk/models/operations";

let value: MarkAsReadResponseBody = {
  seriesCompleted: {
    seriesId: 123,
    seriesName: "Saga",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `seriesCompleted`                                                         | [operations.SeriesCompleted](../../models/operations/series-completed.md) | :heavy_minus_sign:                                                        | Every live issue of the series is now read.                               |