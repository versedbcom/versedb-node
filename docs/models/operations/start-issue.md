# StartIssue

## Example Usage

```typescript
import { StartIssue } from "@versedbcom/sdk/models/operations";

let value: StartIssue = {
  id: 5432,
  name: "Civil War #1",
  slug: "civil-war-1",
  issueNumber: "1",
  seriesId: 412,
  coverUrl: "https://...-cover_md.webp",
  images: {
    thumb: "https://...-thumb.webp",
    coverSm: "https://...-cover_sm.webp",
    coverMd: "https://...-cover_md.webp",
    coverLg: "https://...-cover_lg.webp",
  },
  series: {
    id: 412,
    name: "Civil War",
    slug: "civil-war-2006",
    startYear: 2006,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | 5432                                                                         |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | Civil War #1                                                                 |
| `slug`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | civil-war-1                                                                  |
| `issueNumber`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | 1                                                                            |
| `seriesId`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | 412                                                                          |
| `coverUrl`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | https://...-cover_md.webp                                                    |
| `images`                                                                     | [operations.StartIssueImages](../../models/operations/start-issue-images.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `series`                                                                     | [operations.StartIssueSeries](../../models/operations/start-issue-series.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |