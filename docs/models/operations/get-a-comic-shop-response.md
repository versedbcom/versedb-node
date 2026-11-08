# GetAComicShopResponse

## Example Usage

```typescript
import { GetAComicShopResponse } from "@versedbcom/sdk/models/operations";

let value: GetAComicShopResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      id: 42,
      name: "Midtown Comics",
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
      address: "200 W 40th St",
      city: "New York",
      stateProvince: "NY",
      postalCode: "10018",
      country: "United States",
      countryCode: "US",
      website: "https://www.midtowncomics.com",
      fullAddress: "200 W 40th St, New York, NY, 10018, United States",
      logoUrl: "https://...-tile_sm.webp",
      images: null,
      operatingHours: {
        monday: "10:00-20:00",
        sunday: "closed",
      },
      specialHours: [
        {
          from: "2026-12-25",
          to: "2026-12-26",
          hours: "closed",
          note: "Closed for the holidays",
        },
      ],
      relatedShops: [
        {
          id: 43,
          name: "Midtown Comics Downtown",
          slug: "midtown-comics-downtown",
          city: "New York",
          stateProvince: "NY",
          country: "United States",
          logoUrl: "https://...-tile_sm.webp",
          url: "https://versedb.com/comic-shop/43/midtown-comics-downtown",
        },
      ],
      services: [
        "New Comics",
        "Back Issues",
        "Pull Lists",
        "Grading",
      ],
      events: [
        {
          id: 42,
          slug: "midtown-signing-2026",
          name: "Midtown Signing",
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
          type: "store_event",
          startDate: "2026-07-23",
          endDate: "2026-07-23",
          startTime: "10:00:00",
          endTime: "14:00:00",
          timezone: "America/New_York",
          isOnline: true,
          isFcbd: null,
          status: "scheduled",
          venueName: "Midtown Comics",
          city: "New York",
          region: "NY",
          countryCode: "US",
          fullLocation: "Midtown Comics, New York, NY, United States",
          logoUrl: "https://...-tile_sm.webp",
          images: {
            tileSm: "https://...-tile_sm.webp",
            fullMd: "https://...-full_md.webp",
            fullLg: "https://...-full_lg.webp",
          },
          ticketPrice: "Free",
          followerCount: 12,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [operations.GetAComicShopResponseBody](../../models/operations/get-a-comic-shop-response-body.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |