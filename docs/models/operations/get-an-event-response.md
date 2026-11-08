# GetAnEventResponse

## Example Usage

```typescript
import { GetAnEventResponse } from "@versedbcom/sdk/models/operations";

let value: GetAnEventResponse = {
  headers: {},
  result: {
    data: {
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
      issues: [],
      issueVariants: [
        {
          id: 901,
          issueId: 5432,
          variantName: "Cover B",
          coverUrl: "https://...-cover_lg.webp",
          images: null,
          variantType: "standard",
          ratio: "1:25",
          price: "4.99",
          currencyCode: "USD",
          formattedPrice: "$4.99",
          ean: "75960609999300111",
          isNsfw: false,
          variantNameI18n: {
            "ja": {
              value: "講談社",
              source: "madb",
              reading: "こうだんしゃ",
            },
          },
        },
      ],
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
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [operations.GetAnEventResponseBody](../../models/operations/get-an-event-response-body.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |