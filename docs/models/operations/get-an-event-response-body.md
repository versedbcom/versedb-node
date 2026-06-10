# GetAnEventResponseBody

## Example Usage

```typescript
import { GetAnEventResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetAnEventResponseBody = {
  data: {
    id: 1,
    slug: "east-adella-comic-con-2027-yiiv",
    name: "East Adella Comic Con 2027",
    description:
      "Ut perferendis est reiciendis et. Ut dolorem qui iure et perferendis.\n\nSunt rerum officia unde numquam consequatur occaecati. Facilis perspiciatis qui voluptate nisi dolor. Ab unde aspernatur enim velit odit sit sed. Voluptatem laudantium vel accusantium sed repellat quibusdam vero.",
    type: "convention",
    startDate: "2026-11-21",
    endDate: "2026-11-24",
    timezone: "America/New_York",
    isOnline: false,
    isFcbd: false,
    venueName: "Graham LLC Convention Center",
    streetAddress: "32943 Romaguera Loop Suite 435",
    city: "Judgeland",
    region: "Nebraska",
    postalCode: "64928-8322",
    countryCode: "GB",
    latitude: "54.65276700",
    longitude: "146.13021300",
    fullLocation: "Graham LLC Convention Center, Judgeland, Nebraska",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=54.65276700,146.13021300",
    logoUrl: null,
    images: null,
    staticMapUrl:
      "https://maps.googleapis.com/maps/api/staticmap?center=54.65276700%2C146.13021300&zoom=15&size=600x300&scale=2&maptype=roadmap&markers=color%3Ared%7C54.65276700%2C146.13021300&key=AIzaSyCQEO2B-REE3GcmGSiTyHnhedqMe55U7Do&style=feature%3Aall%7Celement%3Ageometry%7Ccolor%3A0x242f3e&style=feature%3Aall%7Celement%3Alabels.text.stroke%7Ccolor%3A0x242f3e&style=feature%3Aall%7Celement%3Alabels.text.fill%7Ccolor%3A0x746855&style=feature%3Aadministrative.locality%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Apoi%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Apoi.park%7Celement%3Ageometry%7Ccolor%3A0x263c3f&style=feature%3Apoi.park%7Celement%3Alabels.text.fill%7Ccolor%3A0x6b9a76&style=feature%3Aroad%7Celement%3Ageometry%7Ccolor%3A0x38414e&style=feature%3Aroad%7Celement%3Ageometry.stroke%7Ccolor%3A0x212a37&style=feature%3Aroad%7Celement%3Alabels.text.fill%7Ccolor%3A0x9ca5b3&style=feature%3Aroad.highway%7Celement%3Ageometry%7Ccolor%3A0x746855&style=feature%3Aroad.highway%7Celement%3Ageometry.stroke%7Ccolor%3A0x1f2835&style=feature%3Aroad.highway%7Celement%3Alabels.text.fill%7Ccolor%3A0xf3d19c&style=feature%3Atransit%7Celement%3Ageometry%7Ccolor%3A0x2f3948&style=feature%3Atransit.station%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Awater%7Celement%3Ageometry%7Ccolor%3A0x17263c&style=feature%3Awater%7Celement%3Alabels.text.fill%7Ccolor%3A0x515c6d&style=feature%3Awater%7Celement%3Alabels.text.stroke%7Ccolor%3A0x17263c",
    eventUrl: "http://walsh.com/",
    ticketPriceMin: null,
    ticketPriceMax: null,
    ticketCurrency: null,
    ticketPrice: null,
    followerCount: 0,
    creators: [],
    issues: [],
    issueVariants: [],
    attendeesPreview: {
      total: 0,
      users: [],
    },
    relatedEvents: [],
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [operations.GetAnEventData](../../models/operations/get-an-event-data.md) | :heavy_minus_sign:                                                        | N/A                                                                       |