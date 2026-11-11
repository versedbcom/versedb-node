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
    name: "The Chameleon Strikes!",
    coverDate: "2018-09-01",
    releaseDate: "2018-07-11",
    focDate: "2018-06-18",
    isUnreleased: false,
    coverUrl: "https://...-cover_lg.webp",
    images: {
      thumb: "https://...-thumb.webp",
      coverSm: "https://...-cover_sm.webp",
      coverMd: "https://...-cover_md.webp",
      coverLg: "https://...-cover_lg.webp",
    },
    isReprint: false,
    contentRatingLabel: "Teen",
    minAge: 13,
    isNsfw: true,
    averageRating: 4.5,
    nameI18n: {
      "ja": {
        value: "講談社",
        source: "madb",
        reading: "こうだんしゃ",
      },
    },
    series: {
      id: 123,
      name: "The Amazing Spider-Man",
      slug: "the-amazing-spider-man-2018",
      startYear: 2018,
      endYear: 2022,
      volumeNumber: 5,
      publicationType: "regular_series",
      format: "Standard",
      cachedIssuesCount: 93,
      coverUrl: "https://...-cover_lg.webp",
      images: {
        coverSm: "https://...-cover_sm.webp",
        coverMd: "https://...-cover_md.webp",
        coverLg: "https://...-cover_lg.webp",
      },
      publisherName: "Marvel",
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                                     | *number*                                                                                                      | :heavy_check_mark:                                                                                            | The candidate issue.                                                                                          | 5432                                                                                                          |
| `variantId`                                                                                                   | *number*                                                                                                      | :heavy_check_mark:                                                                                            | The candidate's best-scoring variant cover; null is the issue's own cover.                                    | 789                                                                                                           |
| `issue`                                                                                                       | [operations.LookUpAnIssueByCoverPhotoIssue](../../models/operations/look-up-an-issue-by-cover-photo-issue.md) | :heavy_check_mark:                                                                                            | The issue, as `GET /api/v1/issues` returns it with `include=series`.                                          |                                                                                                               |