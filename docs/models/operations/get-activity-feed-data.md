# GetActivityFeedData

## Example Usage

```typescript
import { GetActivityFeedData } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedData = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | collection_9921                                                                              |
| `type`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | collection                                                                                   |
| `action`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | added_to_collection                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 2026-06-20T14:32:00+00:00                                                                    |
| `data`                                                                                       | [operations.GetActivityFeedDataData](../../models/operations/get-activity-feed-data-data.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |