# GetActivityFeedResponse

## Example Usage

```typescript
import { GetActivityFeedResponse } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [
      {
        id: "collection_9921",
        type: "collection",
        action: "added_to_collection",
        createdAt: "2026-06-20T14:32:00+00:00",
        data: {
          issueId: 5432,
          issueName: "Amazing Spider-Man #1",
          seriesName: "Amazing Spider-Man",
          seriesStartYear: 2022,
          coverUrl:
            "https://r2.versedb.com/uploads/issues/asm-5432/asm-5432-cover_md.webp",
        },
      },
    ],
    meta: {
      currentPage: 1,
      perPage: 20,
      total: 84,
      lastPage: 5,
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [operations.GetActivityFeedResponseBody](../../models/operations/get-activity-feed-response-body.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |