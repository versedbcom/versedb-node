# GetIssueDetailsResponseBody

Success

## Example Usage

```typescript
import { GetIssueDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssueDetailsResponseBody = {
  data: {
    id: 5432,
    slug: "amazing-spider-man-1",
    seriesId: 123,
    issueNumber: "1",
    name: "The Chameleon Strikes!",
    solicitation: "The publisher's solicitation text.",
    releaseDate: "2018-07-11",
    focDate: "2018-06-18",
    coverDate: "2018-09-01",
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
    pageCount: 32,
    price: "4.99",
    currencyCode: "USD",
    formattedPrice: "USD $4.99",
    isbn: "9781302912345",
    upc: "75960608936700111",
    lunarCode: "0518MA0001",
    universalCode: "UC1",
    diamondCode: "MAY180001",
    ean: "9781302912345",
    issn: "1234-5678",
    isAnthology: false,
    isTieIn: true,
    adaptedFrom: "anime",
    printRun: 12000,
    locations: "Gotham",
    sku: "SKU-1",
    variantCount: 4,
    readsCount: 120,
    averageRating: 4.5,
    reviewCount: 12,
    title: {
      id: 1,
      name: "The Amazing Spider-Man",
      slug: "the-amazing-spider-man",
    },
    series: {
      id: 123,
      name: "The Amazing Spider-Man",
      slug: "the-amazing-spider-man-2018",
      startYear: 2018,
      endYear: 2022,
      volumeNumber: 5,
      status: "Ongoing",
      publicationType: "regular_series",
      cachedIssuesCount: 93,
      medium: "comic",
      format: "Standard",
      contentRatingLabel: "Teen",
      minAge: 13,
      isNsfw: false,
      originalLanguage: "en",
      language: "en",
      genres: [],
      aliases: [
        "<value 1>",
      ],
      imprint: {
        id: 7,
        name: "Marvel Knights",
      },
      foreignEditionOf: [
        {
          id: 1,
          name: "<value>",
          slug: "slug",
          language: "<value>",
        },
      ],
      foreignEditions: [],
    },
    publisher: {
      id: 1,
      name: "Marvel",
      slug: "marvel",
    },
    imprint: {
      id: 7,
      name: "Marvel Knights",
    },
    awards: [
      {
        id: 3,
        name: "Eisner Award",
        category: "Best Single Issue",
        year: 2019,
      },
    ],
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
        sortOrder: 1,
      },
    ],
    characters: [
      {
        id: 1,
        name: "Spider-Man",
        slug: "spider-man",
        realName: "Peter Parker",
        imageUrl: "https://...-profile_md.webp",
        images: {
          tileSm: "https://...-tile_sm.webp",
          profileMd: "https://...-profile_md.webp",
          fullLg: "https://...-full_lg.webp",
        },
        sortOrder: 1,
      },
    ],
    teams: [
      {
        id: 1,
        name: "The Avengers",
        slug: "avengers",
        headquarters: "Avengers Tower",
        imageUrl: "https://...-tile_sm.webp",
        images: {
          tileSm: "https://...-tile_sm.webp",
          profileMd: "https://...-profile_md.webp",
          fullLg: "https://...-full_lg.webp",
        },
        sortOrder: 1,
      },
    ],
    storyArcs: [],
    universes: [
      {
        id: 1,
        name: "Earth-616",
      },
    ],
    comicEvents: [
      {
        id: 1,
        name: "San Diego Comic-Con",
        slug: "sdcc",
        type: "exclusive",
        notes: "Signed",
        displayOrder: 1,
      },
    ],
    keyIssueReasons: [],
    availabilities: [],
    nameI18n: {
      "ja": {
        value: "講談社",
        source: "madb",
        reading: "こうだんしゃ",
      },
    },
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [operations.GetIssueDetailsData](../../models/operations/get-issue-details-data.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |