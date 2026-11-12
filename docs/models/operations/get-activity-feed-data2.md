# GetActivityFeedData2

## Example Usage

```typescript
import { GetActivityFeedData2 } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedData2 = {
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
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `reviewId`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 312                                                                   |
| `issueId`                                                             | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 5432                                                                  |
| `issueName`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The issue as its series names it, or null when the issue is gone.     | Amazing Spider-Man #1                                                 |
| `seriesName`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | Amazing Spider-Man                                                    |
| `seriesStartYear`                                                     | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 2022                                                                  |
| `rating`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The rating to one decimal place, as text.                             | 4.5                                                                   |
| `contentPreview`                                                      | *string*                                                              | :heavy_check_mark:                                                    | The first 100 characters of the review.                               | A strong anniversary issue that pays off years of buildup...          |
| `coverUrl`                                                            | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | https://r2.versedb.com/uploads/issues/asm-5432/asm-5432-cover_md.webp |