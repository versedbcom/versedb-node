# GetSeriesIssuesResponseBody

Success

## Example Usage

```typescript
import { GetSeriesIssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesIssuesResponseBody = {
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
      images: {
        thumb: "https://...-thumb.webp",
        coverSm: "https://...-cover_sm.webp",
        coverMd: "https://...-cover_md.webp",
        coverLg: "https://...-cover_lg.webp",
      },
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
        url: "https://impressionable-agreement.biz",
        label: "<value>",
        active: true,
      },
    ],
    path: "/etc",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.GetSeriesIssuesData](../../models/operations/get-series-issues-data.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `links`                                                                               | [operations.GetSeriesIssuesLinks](../../models/operations/get-series-issues-links.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [operations.GetSeriesIssuesMeta](../../models/operations/get-series-issues-meta.md)   | :heavy_check_mark:                                                                    | N/A                                                                                   |