# GetCharacterSeriesResponseBody

Success

## Example Usage

```typescript
import { GetCharacterSeriesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharacterSeriesResponseBody = {
  data: [
    {
      id: 123,
      titleId: 1,
      name: "The Amazing Spider-Man",
      displayName: "The Amazing Spider-Man (2018)",
      slug: "amazing-spider-man-2018",
      number: 6,
      startYear: 2018,
      endYear: 2022,
      coverUrl: "https://...-cover_lg.webp",
      images: {
        coverSm: "https://...-cover_sm.webp",
        coverMd: "https://...-cover_md.webp",
        coverLg: "https://...-cover_lg.webp",
      },
      medium: "comic",
      publicationType: "regular_series",
      format: "Standard",
      status: "Ongoing",
      originalName: "The Amazing Spider-Man",
      originalLanguage: "en",
      language: "en",
      cachedIssuesCount: 94,
      averageRating: "4.25",
      totalReviews: 12,
      issuesAverageRating: "4.10",
      issuesRatedCount: 40,
      contentRatingLabel: "Teen",
      minAge: 13,
      isNsfw: false,
      publisherName: "Marvel",
      nameI18n: {
        "ja": {
          value: "講談社",
          source: "madb",
          reading: "こうだんしゃ",
        },
      },
      aliasesI18n: {
        "en": [
          "Kodansha Comics",
        ],
      },
      originalLocale: "ja",
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
        url: "https://steel-case.name/",
        label: "<value>",
        active: false,
      },
    ],
    path: "/opt/bin",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetCharacterSeriesData](../../models/operations/get-character-series-data.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `links`                                                                                     | [operations.GetCharacterSeriesLinks](../../models/operations/get-character-series-links.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `meta`                                                                                      | [operations.GetCharacterSeriesMeta](../../models/operations/get-character-series-meta.md)   | :heavy_check_mark:                                                                          | N/A                                                                                         |