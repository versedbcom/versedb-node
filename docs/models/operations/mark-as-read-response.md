# MarkAsReadResponse

## Example Usage

```typescript
import { MarkAsReadResponse } from "@versedbcom/sdk/models/operations";

let value: MarkAsReadResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    readAt: "2026-03-01T00:00:00+00:00",
    seriesCompleted: {
      seriesId: 123,
      seriesName: "Saga",
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [operations.MarkAsReadResponseBody](../../models/operations/mark-as-read-response-body.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |