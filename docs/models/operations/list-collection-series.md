# ListCollectionSeries

## Example Usage

```typescript
import { ListCollectionSeries } from "@versedbcom/sdk/models/operations";

let value: ListCollectionSeries = {
  id: 123,
  name: "Example Series",
  slug: "example-series",
  startYear: 2023,
  endYear: null,
  volumeNumber: 1,
  publicationType: "ongoing",
  format: "single",
  cachedIssuesCount: 12,
  coverUrl: "https://versedb.com/storage/series/123/cover_lg.jpg",
  images: {
    coverSm: "https://versedb.com/storage/series/123/cover_sm.jpg",
    coverMd: "https://versedb.com/storage/series/123/cover_md.jpg",
    coverLg: "https://versedb.com/storage/series/123/cover_lg.jpg",
  },
  publisherName: "Example Publisher",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 123                                                                 |
| `name`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | Example Series                                                      |
| `slug`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | example-series                                                      |
| `startYear`                                                         | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 2023                                                                |
| `endYear`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | null                                                                |
| `volumeNumber`                                                      | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 1                                                                   |
| `publicationType`                                                   | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | ongoing                                                             |
| `format`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | single                                                              |
| `cachedIssuesCount`                                                 | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 12                                                                  |
| `coverUrl`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | https://versedb.com/storage/series/123/cover_lg.jpg                 |
| `images`                                                            | [operations.SeriesImages](../../models/operations/series-images.md) | :heavy_minus_sign:                                                  | N/A                                                                 |                                                                     |
| `publisherName`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | Example Publisher                                                   |