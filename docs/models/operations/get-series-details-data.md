# GetSeriesDetailsData

## Example Usage

```typescript
import { GetSeriesDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetSeriesDetailsData = {
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
  aliases: [
    "<value 1>",
  ],
  isNsfw: false,
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
  publishers: [
    {
      id: 1,
      name: "Marvel",
      slug: "marvel",
    },
  ],
  imprint: {
    id: 7,
    name: "Marvel Knights",
  },
  effectiveImprint: {
    id: 7,
    name: "Marvel Knights",
  },
  genres: [],
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
  creators: [
    {
      id: 81,
      name: "Nick Spencer",
      slug: "nick-spencer",
      photoUrl: "https://...-profile_md.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        profileMd: "https://...-profile_md.webp",
        fullLg: "https://...-full_lg.webp",
      },
      role: "Writer",
      isUncredited: false,
    },
  ],
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
  focIssues: [
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
      isNsfw: true,
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
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 123                                                                                                               |
| `titleId`                                                                                                         | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 45                                                                                                                |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | The Amazing Spider-Man                                                                                            |
| `originalName`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | アメイジング・スパイダーマン                                                                                                    |
| `displayName`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | The Amazing Spider-Man (2018)                                                                                     |
| `slug`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | the-amazing-spider-man-2018                                                                                       |
| `number`                                                                                                          | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 5                                                                                                                 |
| `startYear`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 2018                                                                                                              |
| `endYear`                                                                                                         | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 2022                                                                                                              |
| `coverUrl`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | https://...-cover_lg.webp                                                                                         |
| `images`                                                                                                          | [operations.GetSeriesDetailsImages](../../models/operations/get-series-details-images.md)                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `publisherDescription`                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | The publisher's own words.                                                                                        |
| `medium`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | comic                                                                                                             |
| `adaptedFrom`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | anime                                                                                                             |
| `publicationType`                                                                                                 | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | regular_series                                                                                                    |
| `format`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Standard                                                                                                          |
| `status`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Ongoing                                                                                                           |
| `originalLanguage`                                                                                                | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | en                                                                                                                |
| `cachedIssuesCount`                                                                                               | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 93                                                                                                                |
| `cachedCreatorsCount`                                                                                             | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 40                                                                                                                |
| `cachedCharactersCount`                                                                                           | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 120                                                                                                               |
| `cachedTeamsCount`                                                                                                | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 12                                                                                                                |
| `listsCount`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 8                                                                                                                 |
| `averageRating`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 4.25                                                                                                              |
| `totalReviews`                                                                                                    | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 3                                                                                                                 |
| `issuesAverageRating`                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 4.10                                                                                                              |
| `issuesRatedCount`                                                                                                | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 20                                                                                                                |
| `imprintId`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 7                                                                                                                 |
| `contentRatingLabel`                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Teen                                                                                                              |
| `minAge`                                                                                                          | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 13                                                                                                                |
| `language`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | en                                                                                                                |
| `aliases`                                                                                                         | *string*[]                                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `isNsfw`                                                                                                          | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `title`                                                                                                           | [operations.GetSeriesDetailsTitle](../../models/operations/get-series-details-title.md)                           | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `publisher`                                                                                                       | [operations.GetSeriesDetailsPublisher](../../models/operations/get-series-details-publisher.md)                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `publishers`                                                                                                      | [operations.GetSeriesDetailsPublisher](../../models/operations/get-series-details-publisher.md)[]                 | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `imprint`                                                                                                         | [operations.GetSeriesDetailsImprint](../../models/operations/get-series-details-imprint.md)                       | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `effectiveImprint`                                                                                                | [operations.EffectiveImprint](../../models/operations/effective-imprint.md)                                       | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `genres`                                                                                                          | [operations.GetSeriesDetailsGenre](../../models/operations/get-series-details-genre.md)[]                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `awards`                                                                                                          | [operations.GetSeriesDetailsAward](../../models/operations/get-series-details-award.md)[]                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `foreignEditionOf`                                                                                                | [operations.GetSeriesDetailsForeignEditionOf](../../models/operations/get-series-details-foreign-edition-of.md)[] | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `foreignEditions`                                                                                                 | [operations.GetSeriesDetailsForeignEdition](../../models/operations/get-series-details-foreign-edition.md)[]      | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `availabilities`                                                                                                  | [operations.GetSeriesDetailsAvailability](../../models/operations/get-series-details-availability.md)[]           | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `creators`                                                                                                        | [operations.GetSeriesDetailsCreator](../../models/operations/get-series-details-creator.md)[]                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `characters`                                                                                                      | [operations.GetSeriesDetailsCharacter](../../models/operations/get-series-details-character.md)[]                 | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `teams`                                                                                                           | [operations.GetSeriesDetailsTeam](../../models/operations/get-series-details-team.md)[]                           | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `focIssues`                                                                                                       | [operations.FocIssue](../../models/operations/foc-issue.md)[]                                                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `upcomingIssues`                                                                                                  | [operations.UpcomingIssue](../../models/operations/upcoming-issue.md)[]                                           | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `nameI18n`                                                                                                        | Record<string, [operations.GetSeriesDetailsNameI18n](../../models/operations/get-series-details-name-i18n.md)>    | :heavy_check_mark:                                                                                                | One name per language, keyed by BCP 47 tag.                                                                       | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                       |
| `aliasesI18n`                                                                                                     | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | Alternative names per language.                                                                                   | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                   |
| `originalLocale`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The language the series is from, a BCP 47 tag.                                                                    | en                                                                                                                |