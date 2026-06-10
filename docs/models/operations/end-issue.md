# EndIssue

## Example Usage

```typescript
import { EndIssue } from "@versedbcom/sdk/models/operations";

let value: EndIssue = {
  id: 5439,
  name: "Civil War #7",
  slug: "civil-war-7",
  issueNumber: "7",
  seriesId: 412,
  coverUrl: "https://cdn.versedb.com/issues/civil-war-7-md.jpg",
  images: {
    coverMd: "https://cdn.versedb.com/issues/civil-war-7-md.jpg",
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 5439                                                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Civil War #7                                                             |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | civil-war-7                                                              |
| `issueNumber`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 7                                                                        |
| `seriesId`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 412                                                                      |
| `coverUrl`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | https://cdn.versedb.com/issues/civil-war-7-md.jpg                        |
| `images`                                                                 | [operations.EndIssueImages](../../models/operations/end-issue-images.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `series`                                                                 | [operations.EndIssueSeries](../../models/operations/end-issue-series.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |