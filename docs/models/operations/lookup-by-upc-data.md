# LookupByUPCData

## Example Usage

```typescript
import { LookupByUPCData } from "@versedbcom/sdk/models/operations";

let value: LookupByUPCData = {
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
  isNsfw: true,
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
    genres: [
      {
        id: 3,
        name: "Superhero",
        slug: null,
      },
    ],
    aliases: [
      "<value 1>",
      "<value 2>",
    ],
    imprint: {
      id: 7,
      name: "Marvel Knights",
    },
    foreignEditionOf: [],
    foreignEditions: [
      {
        id: 1,
        name: "<value>",
        slug: "slug",
        language: "<value>",
      },
    ],
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
  storyArcs: [
    {
      id: 24,
      name: "Civil War",
      slug: "civil-war",
      imageUrl: "https://...-cover_md.webp",
      images: null,
      sortOrder: 1,
    },
  ],
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
  keyIssueReasons: [
    {
      id: 1,
      name: "1st Appearance",
      category: "appearance",
      notes: "Cameo",
    },
  ],
  availabilities: [
    {
      id: 10,
      provider: "midtown_comics",
      providerLabel: "Midtown Comics",
      kind: "buy",
      storeName: "Midtown Comics",
      customName: "Signed edition",
      displayName: "Midtown Comics",
      storeLogo: "/images/brands/midtown.png",
      url: "https://www.midtowncomics.com/...",
      externalId: "12345",
      price: 19.99,
      formattedPrice: "$19.99",
      currency: "USD",
      isDigital: false,
      isAffiliate: false,
      isSynthesized: true,
      verifiedAt: "2026-01-01T00:00:00+00:00",
    },
  ],
  nameI18n: {
    "ja": {
      value: "講談社",
      source: "madb",
      reading: "こうだんしゃ",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 5432                                                                                                 |
| `slug`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | amazing-spider-man-1                                                                                 |
| `seriesId`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 123                                                                                                  |
| `issueNumber`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 1                                                                                                    |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | The Chameleon Strikes!                                                                               |
| `solicitation`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | The publisher's solicitation text.                                                                   |
| `releaseDate`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2018-07-11                                                                                           |
| `focDate`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2018-06-18                                                                                           |
| `coverDate`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2018-09-01                                                                                           |
| `isUnreleased`                                                                                       | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `coverUrl`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | https://...-cover_lg.webp                                                                            |
| `images`                                                                                             | [operations.LookupByUPCImages](../../models/operations/lookup-by-upc-images.md)                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `isReprint`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `contentRatingLabel`                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | Teen                                                                                                 |
| `minAge`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 13                                                                                                   |
| `isNsfw`                                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `pageCount`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 32                                                                                                   |
| `price`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 4.99                                                                                                 |
| `currencyCode`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | USD                                                                                                  |
| `formattedPrice`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | USD $4.99                                                                                            |
| `isbn`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 9781302912345                                                                                        |
| `upc`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 75960608936700111                                                                                    |
| `lunarCode`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 0518MA0001                                                                                           |
| `universalCode`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | UC1                                                                                                  |
| `diamondCode`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | MAY180001                                                                                            |
| `ean`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 9781302912345                                                                                        |
| `issn`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 1234-5678                                                                                            |
| `isAnthology`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `isTieIn`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `adaptedFrom`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | anime                                                                                                |
| `printRun`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 12000                                                                                                |
| `locations`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | Gotham                                                                                               |
| `sku`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | SKU-1                                                                                                |
| `variantCount`                                                                                       | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 4                                                                                                    |
| `readsCount`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 120                                                                                                  |
| `averageRating`                                                                                      | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 4.5                                                                                                  |
| `reviewCount`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 12                                                                                                   |
| `title`                                                                                              | [operations.LookupByUPCTitle](../../models/operations/lookup-by-upc-title.md)                        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `series`                                                                                             | [operations.LookupByUPCSeries](../../models/operations/lookup-by-upc-series.md)                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `publisher`                                                                                          | [operations.LookupByUPCPublisher](../../models/operations/lookup-by-upc-publisher.md)                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `imprint`                                                                                            | [operations.LookupByUPCImprint](../../models/operations/lookup-by-upc-imprint.md)                    | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `awards`                                                                                             | [operations.LookupByUPCAward](../../models/operations/lookup-by-upc-award.md)[]                      | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `creators`                                                                                           | [operations.LookupByUPCCreator](../../models/operations/lookup-by-upc-creator.md)[]                  | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `characters`                                                                                         | [operations.LookupByUPCCharacter](../../models/operations/lookup-by-upc-character.md)[]              | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `teams`                                                                                              | [operations.LookupByUPCTeam](../../models/operations/lookup-by-upc-team.md)[]                        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `storyArcs`                                                                                          | [operations.LookupByUPCStoryArc](../../models/operations/lookup-by-upc-story-arc.md)[]               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `universes`                                                                                          | [operations.LookupByUPCUniverse](../../models/operations/lookup-by-upc-universe.md)[]                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `comicEvents`                                                                                        | [operations.LookupByUPCComicEvent](../../models/operations/lookup-by-upc-comic-event.md)[]           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `keyIssueReasons`                                                                                    | [operations.LookupByUPCKeyIssueReason](../../models/operations/lookup-by-upc-key-issue-reason.md)[]  | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `availabilities`                                                                                     | [operations.LookupByUPCAvailability](../../models/operations/lookup-by-upc-availability.md)[]        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `nameI18n`                                                                                           | Record<string, [operations.LookupByUPCNameI18n](../../models/operations/lookup-by-upc-name-i18n.md)> | :heavy_check_mark:                                                                                   | One name per language, keyed by BCP 47 tag.                                                          | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}          |