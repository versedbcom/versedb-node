# GetIssuesForASpecificTeamResponseBody

Success

## Example Usage

```typescript
import { GetIssuesForASpecificTeamResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssuesForASpecificTeamResponseBody = {
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
      pivotIssueOrder: null,
      pivotIsPrologue: true,
      pivotIsEpilogue: false,
      pivotIsTieIn: false,
    },
  ],
  links: {
    first: "<value>",
    last: "<value>",
    prev: "<value>",
    next: "<value>",
  },
  meta: {
    currentPage: 1,
    from: 1,
    lastPage: 25,
    links: [
      {
        url: "https://steep-lifestyle.com/",
        label: "<value>",
        active: true,
      },
    ],
    path: "/etc/defaults",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.GetIssuesForASpecificTeamData](../../models/operations/get-issues-for-a-specific-team-data.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `links`                                                                                                      | [operations.GetIssuesForASpecificTeamLinks](../../models/operations/get-issues-for-a-specific-team-links.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `meta`                                                                                                       | [operations.GetIssuesForASpecificTeamMeta](../../models/operations/get-issues-for-a-specific-team-meta.md)   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |