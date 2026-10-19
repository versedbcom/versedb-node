# LookUpAnIssueByCoverPhotoIssue

The issue, as `GET /api/v1/issues` returns it with `include=series`.

## Example Usage

```typescript
import { LookUpAnIssueByCoverPhotoIssue } from "@versedbcom/sdk/models/operations";

let value: LookUpAnIssueByCoverPhotoIssue = {
  id: 5432,
  slug: "amazing-spider-man-1",
  seriesId: 123,
  issueNumber: "1",
  name: "The Amazing Spider-Man #1",
  coverDate: "2018-09-01",
  releaseDate: "2018-07-11",
  focDate: "2018-06-18",
  isUnreleased: false,
  coverUrl: "https://...",
  images: {
    thumb: "https://...",
    coverSm: "https://...",
    coverMd: "https://...",
    coverLg: "https://...",
  },
  isReprint: false,
  contentRatingLabel: null,
  minAge: null,
  isNsfw: false,
  averageRating: 4.5,
  series: {
    id: 123,
    name: "Amazing Spider-Man",
    slug: "amazing-spider-man-2018",
    startYear: 2018,
    endYear: null,
    volumeNumber: 5,
    publicationType: "regular_series",
    format: "Standard",
    cachedIssuesCount: 74,
    coverUrl: "https://...",
    images: {
      coverSm: "https://...",
      coverMd: "https://...",
      coverLg: "https://...",
    },
    publisherName: "Marvel",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 5432                                                                                                            |
| `slug`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | amazing-spider-man-1                                                                                            |
| `seriesId`                                                                                                      | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 123                                                                                                             |
| `issueNumber`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 1                                                                                                               |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | The Amazing Spider-Man #1                                                                                       |
| `coverDate`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 2018-09-01                                                                                                      |
| `releaseDate`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 2018-07-11                                                                                                      |
| `focDate`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 2018-06-18                                                                                                      |
| `isUnreleased`                                                                                                  | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | false                                                                                                           |
| `coverUrl`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | https://...                                                                                                     |
| `images`                                                                                                        | [operations.LookUpAnIssueByCoverPhotoImages](../../models/operations/look-up-an-issue-by-cover-photo-images.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `isReprint`                                                                                                     | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | false                                                                                                           |
| `contentRatingLabel`                                                                                            | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | null                                                                                                            |
| `minAge`                                                                                                        | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | null                                                                                                            |
| `isNsfw`                                                                                                        | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | false                                                                                                           |
| `averageRating`                                                                                                 | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 4.5                                                                                                             |
| `series`                                                                                                        | [operations.LookUpAnIssueByCoverPhotoSeries](../../models/operations/look-up-an-issue-by-cover-photo-series.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |