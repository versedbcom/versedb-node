# GetActivityFeedData4

## Example Usage

```typescript
import { GetActivityFeedData4 } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedData4 = {
  id: "collection_9921",
  type: "collection",
  action: "added_to_collection",
  createdAt: "2026-06-20T14:32:00+00:00",
  data: {
    reviewId: 312,
    issueId: 5432,
    issueName: "Amazing Spider-Man #1",
    seriesName: "Amazing Spider-Man",
    seriesStartYear: 2022,
    rating: "4.5",
    contentPreview:
      "A strong anniversary issue that pays off years of buildup...",
    coverUrl:
      "https://r2.versedb.com/uploads/issues/asm-5432/asm-5432-cover_md.webp",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The source and its row id.                               | collection_9921                                          |
| `type`                                                   | [operations.Type](../../models/operations/type.md)       | :heavy_check_mark:                                       | N/A                                                      | collection                                               |
| `action`                                                 | [operations.Action](../../models/operations/action.md)   | :heavy_check_mark:                                       | N/A                                                      | added_to_collection                                      |
| `createdAt`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | 2026-06-20T14:32:00+00:00                                |
| `data`                                                   | *operations.Data*                                        | :heavy_check_mark:                                       | The issue, review or followed entity the entry is about. |                                                          |