# Candidate

## Example Usage

```typescript
import { Candidate } from "@versedbcom/sdk/models/operations";

let value: Candidate = {
  issueId: 5432,
  variantId: 789,
  issue: {
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
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                                     | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | The candidate issue.                                                                                          | 5432                                                                                                          |
| `variantId`                                                                                                   | *number*                                                                                                      | :heavy_check_mark:                                                                                            | The candidate's best-scoring variant cover; null is the issue's own cover.                                    | 789                                                                                                           |
| `issue`                                                                                                       | [operations.LookUpAnIssueByCoverPhotoIssue](../../models/operations/look-up-an-issue-by-cover-photo-issue.md) | :heavy_minus_sign:                                                                                            | The issue, as `GET /api/v1/issues` returns it with `include=series`.                                          |                                                                                                               |