# Upcoming1IssuesMeta

## Example Usage

```typescript
import { Upcoming1IssuesMeta } from "@versedbcom/sdk/models/operations";

let value: Upcoming1IssuesMeta = {
  currentPage: 1,
  perPage: 10,
  total: 28,
  lastPage: 3,
  lookaheadDays: 60,
  windowStart: "2026-03-15",
  windowEnd: "2026-05-14",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `currentPage`      | *number*           | :heavy_check_mark: | N/A                | 1                  |
| `perPage`          | *number*           | :heavy_check_mark: | N/A                | 10                 |
| `total`            | *number*           | :heavy_check_mark: | N/A                | 28                 |
| `lastPage`         | *number*           | :heavy_check_mark: | N/A                | 3                  |
| `lookaheadDays`    | *number*           | :heavy_check_mark: | N/A                | 60                 |
| `windowStart`      | *string*           | :heavy_check_mark: | N/A                | 2026-03-15         |
| `windowEnd`        | *string*           | :heavy_check_mark: | N/A                | 2026-05-14         |