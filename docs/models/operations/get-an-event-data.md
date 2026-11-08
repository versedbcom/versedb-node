# GetAnEventData

## Example Usage

```typescript
import { GetAnEventData } from "@versedbcom/sdk/models/operations";

let value: GetAnEventData = {
  id: 42,
  slug: "san-diego-comic-con-2026",
  name: "San Diego Comic-Con 2026",
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
  type: "convention",
  startDate: "2026-07-23",
  endDate: "2026-07-26",
  startTime: "10:00:00",
  endTime: "18:00:00",
  timezone: "America/Los_Angeles",
  isOnline: true,
  isFcbd: true,
  status: "scheduled",
  venueName: "San Diego Convention Center",
  streetAddress: "111 W Harbor Dr",
  city: "San Diego",
  region: "California",
  postalCode: "92101",
  countryCode: "US",
  latitude: "32.70650000",
  longitude: "-117.16150000",
  fullLocation:
    "San Diego Convention Center, San Diego, California, United States",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=32.70650000,-117.16150000",
  logoUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    fullMd: "https://...-full_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  staticMapUrl: "https://maps.googleapis.com/maps/api/staticmap?center=...",
  eventUrl: "https://www.comic-con.org",
  ticketPriceMin: 4500,
  ticketPriceMax: 15000,
  ticketCurrency: "USD",
  ticketPrice: "USD $45.00 – $150.00",
  followerCount: 320,
  eventFranchiseId: 12,
  store: {
    id: 7,
    name: "Mission Comics",
  },
  creators: [
    {
      id: 7,
      name: "Stan Lee",
      slug: "stan-lee",
      photoUrl: "https://...-profile_md.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        profileMd: "https://...-profile_md.webp",
        fullLg: "https://...-full_lg.webp",
      },
      country: "US",
      appearanceTypes: [
        "Guest",
        "Signing",
      ],
    },
  ],
  issues: [
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
      pivotIssueOrder: "<value>",
      pivotIsPrologue: false,
      pivotIsEpilogue: true,
      pivotIsTieIn: true,
    },
  ],
  issueVariants: [],
  attendeesPreview: {
    total: 320,
    users: [
      {
        id: 1024,
        username: "comic_fan_42",
        name: "comic_fan_42",
        profileImageUrl: "https://...-profile_md.webp",
        isPrivate: false,
      },
    ],
  },
  relatedEvents: [
    {
      id: 42,
      slug: "san-diego-comic-con-2026",
      name: "San Diego Comic-Con 2026",
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
      type: "convention",
      startDate: "2026-07-23",
      endDate: "2026-07-26",
      startTime: "10:00:00",
      endTime: "18:00:00",
      timezone: "America/Los_Angeles",
      isOnline: true,
      isFcbd: false,
      status: "scheduled",
      venueName: "San Diego Convention Center",
      city: "San Diego",
      region: "California",
      countryCode: "US",
      fullLocation:
        "San Diego Convention Center, San Diego, California, United States",
      logoUrl: "https://...-tile_sm.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        fullMd: "https://...-full_md.webp",
        fullLg: "https://...-full_lg.webp",
      },
      ticketPrice: "USD $45.00 – $150.00",
      followerCount: 320,
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 42                                                                                                 |
| `slug`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | san-diego-comic-con-2026                                                                           |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | San Diego Comic-Con 2026                                                                           |
| `nameI18n`                                                                                         | Record<string, [operations.GetAnEventNameI18n](../../models/operations/get-an-event-name-i18n.md)> | :heavy_check_mark:                                                                                 | One name per language, keyed by BCP 47 tag.                                                        | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}        |
| `aliasesI18n`                                                                                      | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | Alternative names per language.                                                                    | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                    |
| `originalLocale`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The language the entity is from, a BCP 47 tag.                                                     | en                                                                                                 |
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | convention or store_event.                                                                         | convention                                                                                         |
| `startDate`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 2026-07-23                                                                                         |
| `endDate`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 2026-07-26                                                                                         |
| `startTime`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 10:00:00                                                                                           |
| `endTime`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 18:00:00                                                                                           |
| `timezone`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | America/Los_Angeles                                                                                |
| `isOnline`                                                                                         | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `isFcbd`                                                                                           | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `status`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | scheduled, cancelled, postponed or moved_online.                                                   | scheduled                                                                                          |
| `venueName`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | San Diego Convention Center                                                                        |
| `streetAddress`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 111 W Harbor Dr                                                                                    |
| `city`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | San Diego                                                                                          |
| `region`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | California                                                                                         |
| `postalCode`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 92101                                                                                              |
| `countryCode`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | US                                                                                                 |
| `latitude`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 32.70650000                                                                                        |
| `longitude`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | -117.16150000                                                                                      |
| `fullLocation`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | `Online Event` for an online event, `Location TBA` when nothing is known.                          | San Diego Convention Center, San Diego, California, United States                                  |
| `googleMapsUrl`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | https://www.google.com/maps/search/?api=1&query=32.70650000,-117.16150000                          |
| `logoUrl`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | https://...-full_lg.webp                                                                           |
| `images`                                                                                           | [operations.GetAnEventImages](../../models/operations/get-an-event-images.md)                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `staticMapUrl`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Left out for an online event.                                                                      | https://maps.googleapis.com/maps/api/staticmap?center=...                                          |
| `eventUrl`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | https://www.comic-con.org                                                                          |
| `ticketPriceMin`                                                                                   | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 4500                                                                                               |
| `ticketPriceMax`                                                                                   | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 15000                                                                                              |
| `ticketCurrency`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | USD                                                                                                |
| `ticketPrice`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | USD $45.00 – $150.00                                                                               |
| `followerCount`                                                                                    | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 320                                                                                                |
| `eventFranchiseId`                                                                                 | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 12                                                                                                 |
| `store`                                                                                            | [operations.Store](../../models/operations/store.md)                                               | :heavy_minus_sign:                                                                                 | The hosting shop, for a store event; null fields once the shop is gone.                            |                                                                                                    |
| `creators`                                                                                         | [operations.GetAnEventCreator](../../models/operations/get-an-event-creator.md)[]                  | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `issues`                                                                                           | [operations.GetAnEventIssue](../../models/operations/get-an-event-issue.md)[]                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `issueVariants`                                                                                    | [operations.IssueVariant](../../models/operations/issue-variant.md)[]                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `attendeesPreview`                                                                                 | [operations.AttendeesPreview](../../models/operations/attendees-preview.md)                        | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `relatedEvents`                                                                                    | [operations.RelatedEvent](../../models/operations/related-event.md)[]                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |