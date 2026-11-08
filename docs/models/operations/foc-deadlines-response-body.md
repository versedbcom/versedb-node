# FOCDeadlinesResponseBody

Success

## Example Usage

```typescript
import { FOCDeadlinesResponseBody } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesResponseBody = {
  data: [
    {
      id: 5432,
      slug: "amazing-spider-man-1",
      seriesId: 123,
      issueNumber: "1",
      name: "The Chameleon Strikes!",
      coverDate: "2018-09-01",
      releaseDate: "2018-07-11",
      focDate: "2018-06-18",
      isUnreleased: true,
      coverUrl: "https://...-cover_lg.webp",
      images: null,
      isReprint: true,
      contentRatingLabel: "Teen",
      minAge: 13,
      isNsfw: false,
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
  ],
  meta: {
    currentPage: 1,
    perPage: 10,
    total: 28,
    lastPage: 3,
    focWindowDays: 7,
    focStart: "2026-03-15",
    focEnd: "2026-03-22",
    sort: "foc_date",
    note: "FOC dates are estimates based on release_date - 14 days",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.FOCDeadlinesData](../../models/operations/foc-deadlines-data.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `meta`                                                                         | [operations.FOCDeadlinesMeta](../../models/operations/foc-deadlines-meta.md)   | :heavy_check_mark:                                                             | N/A                                                                            |