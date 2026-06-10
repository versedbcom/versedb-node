# GetSeriesDetailsResponseBody

Success

## Example Usage

```typescript
import { GetSeriesDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesDetailsResponseBody = {
  data: {
    id: 123,
    titleId: 45,
    name: "Amazing Spider-Man",
    slug: "amazing-spider-man-2018",
    number: 6,
    startYear: 2018,
    endYear: 2022,
    coverUrl: "https://...",
    description: "The sixth volume of Amazing Spider-Man...",
    publicationType: "ongoing",
    format: "comic",
    status: "ended",
    originalLanguage: "en",
    cachedIssuesCount: 75,
    averageRating: 4.2,
    totalReviews: 150,
    ageRating: "teen",
    isNsfw: false,
    cachedCreatorsCount: 12,
    cachedCharactersCount: 24,
    cachedTeamsCount: 3,
    listsCount: 8,
    title: {
      id: 45,
      name: "Amazing Spider-Man",
      urlSlug: "amazing-spider-man",
    },
    publisher: {
      id: 1,
      name: "Marvel",
      slug: "marvel",
    },
    publishers: [
      {
        id: 1,
        name: "Marvel",
        slug: "marvel",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Superhero",
      },
    ],
    imprint: null,
    effectiveImprint: null,
    lastEditedBy: {
      id: 42,
      name: "Jane Doe",
      username: "janedoe",
      avatarUrl: "https://...",
    },
    creators: [
      {
        id: 789,
        name: "Nick Spencer",
        slug: "nick-spencer",
        photoUrl: "https://...",
        role: "Writer",
        isUncredited: false,
      },
    ],
    characters: [
      {
        id: 456,
        name: "Spider-Man (Peter Parker)",
        slug: "spider-man-peter-parker",
        realName: "Peter Parker",
        aliases: [],
        imageUrl: "https://...",
        appearancesCount: 75,
      },
    ],
    teams: [
      {
        id: 33,
        name: "Avengers",
        slug: "avengers",
        imageUrl: "https://...",
        membersCount: 24,
      },
    ],
    focIssues: [
      {
        id: 9912,
        issueNumber: "42",
        name: "Issue 42",
        releaseDate: "2026-06-04",
        focDate: "2026-05-12",
        coverUrl: "https://...",
      },
    ],
    upcomingIssues: [
      {
        id: 9913,
        issueNumber: "43",
        name: "Issue 43",
        releaseDate: "2026-06-11",
        coverUrl: "https://...",
      },
    ],
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.GetSeriesDetailsData](../../models/operations/get-series-details-data.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |