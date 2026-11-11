# GetIssueDetailsData

## Example Usage

```typescript
import { GetIssueDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetIssueDetailsData = {
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
  isAnthology: true,
  isTieIn: false,
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
  awards: [],
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
  teams: [],
  storyArcs: [],
  universes: [],
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
      isDigital: true,
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 5432                                                                                                         |
| `slug`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | amazing-spider-man-1                                                                                         |
| `seriesId`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 123                                                                                                          |
| `issueNumber`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 1                                                                                                            |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | The Chameleon Strikes!                                                                                       |
| `solicitation`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | The publisher's solicitation text.                                                                           |
| `releaseDate`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 2018-07-11                                                                                                   |
| `focDate`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 2018-06-18                                                                                                   |
| `coverDate`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 2018-09-01                                                                                                   |
| `isUnreleased`                                                                                               | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `coverUrl`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | https://...-cover_lg.webp                                                                                    |
| `images`                                                                                                     | [operations.GetIssueDetailsImages](../../models/operations/get-issue-details-images.md)                      | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `isReprint`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `contentRatingLabel`                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | Teen                                                                                                         |
| `minAge`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 13                                                                                                           |
| `isNsfw`                                                                                                     | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `pageCount`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 32                                                                                                           |
| `price`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 4.99                                                                                                         |
| `currencyCode`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | USD                                                                                                          |
| `formattedPrice`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | USD $4.99                                                                                                    |
| `isbn`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 9781302912345                                                                                                |
| `upc`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 75960608936700111                                                                                            |
| `lunarCode`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 0518MA0001                                                                                                   |
| `universalCode`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | UC1                                                                                                          |
| `diamondCode`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | MAY180001                                                                                                    |
| `ean`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 9781302912345                                                                                                |
| `issn`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 1234-5678                                                                                                    |
| `isAnthology`                                                                                                | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `isTieIn`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `adaptedFrom`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | anime                                                                                                        |
| `printRun`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 12000                                                                                                        |
| `locations`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | Gotham                                                                                                       |
| `sku`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | SKU-1                                                                                                        |
| `variantCount`                                                                                               | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 4                                                                                                            |
| `readsCount`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | 120                                                                                                          |
| `averageRating`                                                                                              | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | 4.5                                                                                                          |
| `reviewCount`                                                                                                | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | 12                                                                                                           |
| `title`                                                                                                      | [operations.GetIssueDetailsTitle](../../models/operations/get-issue-details-title.md)                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `series`                                                                                                     | [operations.GetIssueDetailsSeries](../../models/operations/get-issue-details-series.md)                      | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `publisher`                                                                                                  | [operations.GetIssueDetailsPublisher](../../models/operations/get-issue-details-publisher.md)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `imprint`                                                                                                    | [operations.GetIssueDetailsImprint](../../models/operations/get-issue-details-imprint.md)                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `awards`                                                                                                     | [operations.GetIssueDetailsAward](../../models/operations/get-issue-details-award.md)[]                      | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `creators`                                                                                                   | [operations.GetIssueDetailsCreator](../../models/operations/get-issue-details-creator.md)[]                  | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `characters`                                                                                                 | [operations.GetIssueDetailsCharacter](../../models/operations/get-issue-details-character.md)[]              | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `teams`                                                                                                      | [operations.GetIssueDetailsTeam](../../models/operations/get-issue-details-team.md)[]                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `storyArcs`                                                                                                  | [operations.GetIssueDetailsStoryArc](../../models/operations/get-issue-details-story-arc.md)[]               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `universes`                                                                                                  | [operations.GetIssueDetailsUniverse](../../models/operations/get-issue-details-universe.md)[]                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `comicEvents`                                                                                                | [operations.GetIssueDetailsComicEvent](../../models/operations/get-issue-details-comic-event.md)[]           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `keyIssueReasons`                                                                                            | [operations.GetIssueDetailsKeyIssueReason](../../models/operations/get-issue-details-key-issue-reason.md)[]  | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `availabilities`                                                                                             | [operations.GetIssueDetailsAvailability](../../models/operations/get-issue-details-availability.md)[]        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `nameI18n`                                                                                                   | Record<string, [operations.GetIssueDetailsNameI18n](../../models/operations/get-issue-details-name-i18n.md)> | :heavy_check_mark:                                                                                           | One name per language, keyed by BCP 47 tag.                                                                  | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                  |