# GetActivityFeedResponseBody

Success

## Example Usage

```typescript
import { GetActivityFeedResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedResponseBody = {
  data: [],
  meta: {
    currentPage: 1,
    perPage: 20,
    total: 84,
    lastPage: 5,
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.GetActivityFeedData4](../../models/operations/get-activity-feed-data4.md)[] | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `meta`                                                                                  | [operations.GetActivityFeedMeta](../../models/operations/get-activity-feed-meta.md)     | :heavy_check_mark:                                                                      | N/A                                                                                     |