# LookupByDistributorCodeData

## Example Usage

```typescript
import { LookupByDistributorCodeData } from "@versedbcom/sdk/models/operations";

let value: LookupByDistributorCodeData = {
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
  isReprint: true,
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
  isAnthology: null,
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
  series: null,
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
      images: {
        coverSm: "https://...-cover_sm.webp",
        coverMd: "https://...-cover_md.webp",
        coverLg: "https://...-cover_lg.webp",
      },
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
  availabilities: [],
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 5432                                                                                                                          |
| `slug`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | amazing-spider-man-1                                                                                                          |
| `seriesId`                                                                                                                    | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 123                                                                                                                           |
| `issueNumber`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 1                                                                                                                             |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | The Chameleon Strikes!                                                                                                        |
| `solicitation`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | The publisher's solicitation text.                                                                                            |
| `releaseDate`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 2018-07-11                                                                                                                    |
| `focDate`                                                                                                                     | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 2018-06-18                                                                                                                    |
| `coverDate`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 2018-09-01                                                                                                                    |
| `isUnreleased`                                                                                                                | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `coverUrl`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | https://...-cover_lg.webp                                                                                                     |
| `images`                                                                                                                      | [operations.LookupByDistributorCodeImages](../../models/operations/lookup-by-distributor-code-images.md)                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `isReprint`                                                                                                                   | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `contentRatingLabel`                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | Teen                                                                                                                          |
| `minAge`                                                                                                                      | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 13                                                                                                                            |
| `isNsfw`                                                                                                                      | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `pageCount`                                                                                                                   | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 32                                                                                                                            |
| `price`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 4.99                                                                                                                          |
| `currencyCode`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | USD                                                                                                                           |
| `formattedPrice`                                                                                                              | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | USD $4.99                                                                                                                     |
| `isbn`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 9781302912345                                                                                                                 |
| `upc`                                                                                                                         | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 75960608936700111                                                                                                             |
| `lunarCode`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 0518MA0001                                                                                                                    |
| `universalCode`                                                                                                               | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | UC1                                                                                                                           |
| `diamondCode`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | MAY180001                                                                                                                     |
| `ean`                                                                                                                         | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 9781302912345                                                                                                                 |
| `issn`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 1234-5678                                                                                                                     |
| `isAnthology`                                                                                                                 | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `isTieIn`                                                                                                                     | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `adaptedFrom`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | anime                                                                                                                         |
| `printRun`                                                                                                                    | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 12000                                                                                                                         |
| `locations`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | Gotham                                                                                                                        |
| `sku`                                                                                                                         | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | SKU-1                                                                                                                         |
| `variantCount`                                                                                                                | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 4                                                                                                                             |
| `readsCount`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 120                                                                                                                           |
| `averageRating`                                                                                                               | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | 4.5                                                                                                                           |
| `reviewCount`                                                                                                                 | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | 12                                                                                                                            |
| `title`                                                                                                                       | [operations.LookupByDistributorCodeTitle](../../models/operations/lookup-by-distributor-code-title.md)                        | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `series`                                                                                                                      | [operations.LookupByDistributorCodeSeries](../../models/operations/lookup-by-distributor-code-series.md)                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `publisher`                                                                                                                   | [operations.LookupByDistributorCodePublisher](../../models/operations/lookup-by-distributor-code-publisher.md)                | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `imprint`                                                                                                                     | [operations.LookupByDistributorCodeImprint](../../models/operations/lookup-by-distributor-code-imprint.md)                    | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `awards`                                                                                                                      | [operations.LookupByDistributorCodeAward](../../models/operations/lookup-by-distributor-code-award.md)[]                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `creators`                                                                                                                    | [operations.LookupByDistributorCodeCreator](../../models/operations/lookup-by-distributor-code-creator.md)[]                  | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `characters`                                                                                                                  | [operations.LookupByDistributorCodeCharacter](../../models/operations/lookup-by-distributor-code-character.md)[]              | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `teams`                                                                                                                       | [operations.LookupByDistributorCodeTeam](../../models/operations/lookup-by-distributor-code-team.md)[]                        | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `storyArcs`                                                                                                                   | [operations.LookupByDistributorCodeStoryArc](../../models/operations/lookup-by-distributor-code-story-arc.md)[]               | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `universes`                                                                                                                   | [operations.LookupByDistributorCodeUniverse](../../models/operations/lookup-by-distributor-code-universe.md)[]                | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `comicEvents`                                                                                                                 | [operations.LookupByDistributorCodeComicEvent](../../models/operations/lookup-by-distributor-code-comic-event.md)[]           | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `keyIssueReasons`                                                                                                             | [operations.LookupByDistributorCodeKeyIssueReason](../../models/operations/lookup-by-distributor-code-key-issue-reason.md)[]  | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `availabilities`                                                                                                              | [operations.LookupByDistributorCodeAvailability](../../models/operations/lookup-by-distributor-code-availability.md)[]        | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `nameI18n`                                                                                                                    | Record<string, [operations.LookupByDistributorCodeNameI18n](../../models/operations/lookup-by-distributor-code-name-i18n.md)> | :heavy_check_mark:                                                                                                            | One name per language, keyed by BCP 47 tag.                                                                                   | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                                   |