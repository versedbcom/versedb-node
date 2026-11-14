# GetCharacterIssuesResponseBody

Success

## Example Usage

```typescript
import { GetCharacterIssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharacterIssuesResponseBody = {
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
      isReprint: true,
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
  ],
  links: {
    first: "<value>",
    last: "<value>",
    prev: "<value>",
    next: null,
  },
  meta: {
    currentPage: 1,
    from: 1,
    lastPage: 25,
    links: [],
    path: "/boot",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetCharacterIssuesData](../../models/operations/get-character-issues-data.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `links`                                                                                     | [operations.GetCharacterIssuesLinks](../../models/operations/get-character-issues-links.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `meta`                                                                                      | [operations.GetCharacterIssuesMeta](../../models/operations/get-character-issues-meta.md)   | :heavy_check_mark:                                                                          | N/A                                                                                         |