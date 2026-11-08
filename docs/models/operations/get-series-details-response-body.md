# GetSeriesDetailsResponseBody

Success

## Example Usage

```typescript
import { GetSeriesDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesDetailsResponseBody = {
  data: {
    id: 123,
    titleId: 45,
    name: "The Amazing Spider-Man",
    originalName: "アメイジング・スパイダーマン",
    displayName: "The Amazing Spider-Man (2018)",
    slug: "the-amazing-spider-man-2018",
    number: 5,
    startYear: 2018,
    endYear: 2022,
    coverUrl: "https://...-cover_lg.webp",
    images: {
      coverSm: "https://...-cover_sm.webp",
      coverMd: "https://...-cover_md.webp",
      coverLg: "https://...-cover_lg.webp",
    },
    publisherDescription: "The publisher's own words.",
    medium: "comic",
    adaptedFrom: "anime",
    publicationType: "regular_series",
    format: "Standard",
    status: "Ongoing",
    originalLanguage: "en",
    cachedIssuesCount: 93,
    cachedCreatorsCount: 40,
    cachedCharactersCount: 120,
    cachedTeamsCount: 12,
    listsCount: 8,
    averageRating: "4.25",
    totalReviews: 3,
    issuesAverageRating: "4.10",
    issuesRatedCount: 20,
    imprintId: 7,
    contentRatingLabel: "Teen",
    minAge: 13,
    language: "en",
    aliases: [],
    isNsfw: true,
    title: {
      id: 1,
      name: "The Amazing Spider-Man",
      slug: "the-amazing-spider-man",
    },
    publisher: {
      id: 1,
      name: "Marvel",
      slug: "marvel",
    },
    publishers: [],
    imprint: {
      id: 7,
      name: "Marvel Knights",
    },
    effectiveImprint: null,
    genres: [
      {
        id: 1,
        name: "Superhero",
        slug: "superhero",
      },
    ],
    awards: [
      {
        id: 3,
        name: "Eisner Award",
        category: "Best Continuing Series",
        year: 2019,
      },
    ],
    foreignEditionOf: [
      {
        id: 1,
        name: "<value>",
        slug: "slug",
        language: null,
      },
    ],
    foreignEditions: [],
    availabilities: [],
    creators: [],
    characters: [
      {
        id: 1,
        name: "Spider-Man",
        slug: "spider-man",
        realName: "Peter Parker",
        aliases: [
          "<value 1>",
        ],
        imageUrl: "https://...-full_lg.webp",
        appearancesCount: 400,
      },
    ],
    teams: [
      {
        id: 1,
        name: "The Avengers",
        slug: "avengers",
        imageUrl: "https://...-tile_sm.webp",
        membersCount: 12,
      },
    ],
    focIssues: [],
    upcomingIssues: [
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
      },
    ],
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
    originalLocale: "en",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.GetSeriesDetailsData](../../models/operations/get-series-details-data.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |