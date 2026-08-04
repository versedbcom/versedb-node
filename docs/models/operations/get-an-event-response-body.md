# GetAnEventResponseBody

Success

## Example Usage

```typescript
import { GetAnEventResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetAnEventResponseBody = {
  data: {
    id: 42,
    slug: "san-diego-comic-con-2026",
    name: "San Diego Comic-Con 2026",
    type: "convention",
    status: "scheduled",
    startDate: "2026-07-23",
    endDate: "2026-07-26",
    timezone: "America/Los_Angeles",
    isOnline: false,
    isFcbd: false,
    venueName: "San Diego Convention Center",
    streetAddress: "111 W Harbor Dr",
    city: "San Diego",
    region: "CA",
    postalCode: "92101",
    countryCode: "US",
    latitude: 32.7065,
    longitude: -117.1615,
    fullLocation: "San Diego Convention Center, San Diego, CA, United States",
    googleMapsUrl: "https://maps.google.com/?q=32.7065,-117.1615",
    logoUrl: "https://cdn.versedb.com/events/42-full_lg.webp",
    images: {
      tileSm: "https://cdn.versedb.com/events/42-tile_sm.webp",
      fullMd: "https://cdn.versedb.com/events/42-full_md.webp",
      fullLg: "https://cdn.versedb.com/events/42-full_lg.webp",
    },
    staticMapUrl: "https://cdn.versedb.com/events/42-static-map.png",
    eventUrl: "https://www.comic-con.org",
    ticketPriceMin: "45.00",
    ticketPriceMax: "150.00",
    ticketCurrency: "USD",
    ticketPrice: "$45.00 - $150.00",
    followerCount: 320,
    creators: [
      {
        id: 7,
        name: "Stan Lee",
        slug: "stan-lee",
        photoUrl: "https://cdn.versedb.com/creators/7-profile_md.webp",
        images: {},
        country: "US",
        appearanceTypes: [
          "Special Guest",
        ],
      },
    ],
    issues: [],
    issueVariants: [],
    attendeesPreview: {
      total: 320,
      users: [
        {
          id: 1024,
          username: "comic_fan_42",
          name: "Comic Fan",
          profileImageUrl: "https://cdn.versedb.com/users/1024-profile_sm.webp",
          isPrivate: false,
        },
        {
          id: 1536,
          username: "panel_pusher",
          name: "Riley",
          profileImageUrl: "https://cdn.versedb.com/users/1536-profile_sm.webp",
          isPrivate: false,
        },
      ],
    },
    relatedEvents: [],
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [operations.GetAnEventData](../../models/operations/get-an-event-data.md) | :heavy_minus_sign:                                                        | N/A                                                                       |