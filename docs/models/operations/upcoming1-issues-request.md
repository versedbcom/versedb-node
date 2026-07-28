# Upcoming1IssuesRequest

## Example Usage

```typescript
import { Upcoming1IssuesRequest } from "@versedbcom/sdk/models/operations";

let value: Upcoming1IssuesRequest = {
  limit: 10,
  days: 60,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Max results (1-25).              | 10                               |
| `days`                           | *number*                         | :heavy_minus_sign:               | Lookahead window in days (1-90). | 60                               |