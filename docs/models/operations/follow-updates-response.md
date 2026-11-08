# FollowUpdatesResponse

## Example Usage

```typescript
import { FollowUpdatesResponse } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [operations.FollowUpdatesResponseBody](../../models/operations/follow-updates-response-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |