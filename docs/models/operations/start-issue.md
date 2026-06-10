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
  coverUrl: "https://cdn.versedb.com/issues/civil-war-1-md.jpg",
  images: {
    coverMd: "https://cdn.versedb.com/issues/civil-war-1-md.jpg",
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
| `id`                                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 5432                                                                         |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | Civil War #1                                                                 |
| `slug`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | civil-war-1                                                                  |
| `issueNumber`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 1                                                                            |
| `seriesId`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 412                                                                          |
| `coverUrl`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | https://cdn.versedb.com/issues/civil-war-1-md.jpg                            |
| `images`                                                                     | [operations.StartIssueImages](../../models/operations/start-issue-images.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `series`                                                                     | [operations.StartIssueSeries](../../models/operations/start-issue-series.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |