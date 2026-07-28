# FOCDeadlinesRequest

## Example Usage

```typescript
import { FOCDeadlinesRequest } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesRequest = {
  limit: 10,
  days: 7,
  startDate: "2026-03-15",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | Max results (1-50).                                  | 10                                                   |
| `days`                                               | *number*                                             | :heavy_minus_sign:                                   | FOC window in days (1-30).                           | 7                                                    |
| `startDate`                                          | *string*                                             | :heavy_minus_sign:                                   | Start of FOC window (YYYY-MM-DD). Defaults to today. | 2026-03-15                                           |