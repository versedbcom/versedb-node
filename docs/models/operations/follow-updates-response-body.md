# FollowUpdatesResponseBody

Success

## Example Usage

```typescript
import { FollowUpdatesResponseBody } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesResponseBody = {
  data: [],
  followContexts: {
    "5432": "New in X-Men",
  },
  followTypes: {
    "5432": "title",
  },
  meta: {
    days: 30,
    totalFollows: 12,
    currentPage: 1,
    perPage: 20,
    total: 1,
    lastPage: 1,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.FollowUpdatesData](../../models/operations/follow-updates-data.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `followContexts`                                                                 | *operations.FollowContexts*                                                      | :heavy_minus_sign:                                                               | N/A                                                                              | {<br/>"5432": "New in X-Men"<br/>}                                               |
| `followTypes`                                                                    | *operations.FollowTypes*                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | {<br/>"5432": "title"<br/>}                                                      |
| `meta`                                                                           | [operations.FollowUpdatesMeta](../../models/operations/follow-updates-meta.md)   | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |