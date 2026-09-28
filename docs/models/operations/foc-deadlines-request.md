# FOCDeadlinesRequest

## Example Usage

```typescript
import { FOCDeadlinesRequest } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesRequest = {
  limit: 10,
  page: 1,
  days: 7,
  startDate: "2026-03-15",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `limit`                                               | *number*                                              | :heavy_minus_sign:                                    | Results per page (1-50).                              | 10                                                    |
| `page`                                                | *number*                                              | :heavy_minus_sign:                                    | Page number; meta.last_page says where the list ends. | 1                                                     |
| `days`                                                | *number*                                              | :heavy_minus_sign:                                    | FOC window in days (1-30).                            | 7                                                     |
| `startDate`                                           | *string*                                              | :heavy_minus_sign:                                    | Start of FOC window (YYYY-MM-DD). Defaults to today.  | 2026-03-15                                            |