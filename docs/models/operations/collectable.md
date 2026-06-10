# Collectable

## Example Usage

```typescript
import { Collectable } from "@versedbcom/sdk/models/operations";

let value: Collectable = {
  id: 5432,
  slug: "example-series-1",
  seriesId: 123,
  issueNumber: "1",
  name: "First Issue",
  coverDate: "2023-11-01",
  releaseDate: "2023-11-08",
  focDate: "2023-10-16",
  coverUrl: "https://versedb.com/storage/issues/5432/cover_lg.jpg",
  images: {
    thumb: "https://versedb.com/storage/issues/5432/thumb.jpg",
    coverSm: "https://versedb.com/storage/issues/5432/cover_sm.jpg",
    coverMd: "https://versedb.com/storage/issues/5432/cover_md.jpg",
    coverLg: "https://versedb.com/storage/issues/5432/cover_lg.jpg",
  },
  isReprint: false,
  ageRating: null,
  isNsfw: false,
  averageRating: 4.5,
  series: {
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
  },
  keyIssueReasons: [
    {
      id: 7,
      name: "First appearance",
      category: "appearance",
      slug: "first-appearance",
      notes: null,
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | 5432                                                                                                             |
| `slug`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | example-series-1                                                                                                 |
| `seriesId`                                                                                                       | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | 123                                                                                                              |
| `issueNumber`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | 1                                                                                                                |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | First Issue                                                                                                      |
| `coverDate`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | 2023-11-01                                                                                                       |
| `releaseDate`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | 2023-11-08                                                                                                       |
| `focDate`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | 2023-10-16                                                                                                       |
| `coverUrl`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | https://versedb.com/storage/issues/5432/cover_lg.jpg                                                             |
| `images`                                                                                                         | [operations.ListCollectionImages](../../models/operations/list-collection-images.md)                             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `isReprint`                                                                                                      | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | false                                                                                                            |
| `ageRating`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | null                                                                                                             |
| `isNsfw`                                                                                                         | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | false                                                                                                            |
| `averageRating`                                                                                                  | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | 4.5                                                                                                              |
| `series`                                                                                                         | [operations.ListCollectionSeries](../../models/operations/list-collection-series.md)                             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `keyIssueReasons`                                                                                                | [operations.KeyIssueReason](../../models/operations/key-issue-reason.md)[]                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | [<br/>{<br/>"id": 7,<br/>"name": "First appearance",<br/>"category": "appearance",<br/>"slug": "first-appearance",<br/>"notes": null<br/>}<br/>] |