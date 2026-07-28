# FollowUpdatesRequest

## Example Usage

```typescript
import { FollowUpdatesRequest } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesRequest = {
  limit: 20,
  days: 30,
  page: 1,
  perPage: 20,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `limit`                         | *number*                        | :heavy_minus_sign:              | Max results (1-50).             | 20                              |
| `days`                          | *number*                        | :heavy_minus_sign:              | Lookback window in days (1-90). | 30                              |
| `page`                          | *number*                        | :heavy_minus_sign:              | Page number for pagination.     | 1                               |
| `perPage`                       | *number*                        | :heavy_minus_sign:              | Items per page (1-50).          | 20                              |