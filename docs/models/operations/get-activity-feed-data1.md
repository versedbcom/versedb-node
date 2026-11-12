# GetActivityFeedData1

## Example Usage

```typescript
import { GetActivityFeedData1 } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedData1 = {
  issueId: 5432,
  issueName: "Amazing Spider-Man #1",
  seriesName: "Amazing Spider-Man",
  seriesStartYear: 2022,
  coverUrl:
    "https://r2.versedb.com/uploads/issues/asm-5432/asm-5432-cover_md.webp",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `issueId`                                                             | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 5432                                                                  |
| `issueName`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The issue as its series names it, or null when the issue is gone.     | Amazing Spider-Man #1                                                 |
| `seriesName`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | Amazing Spider-Man                                                    |
| `seriesStartYear`                                                     | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 2022                                                                  |
| `coverUrl`                                                            | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | https://r2.versedb.com/uploads/issues/asm-5432/asm-5432-cover_md.webp |