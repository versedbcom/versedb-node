# ListEventsData

## Example Usage

```typescript
import { ListEventsData } from "@versedbcom/sdk/models/operations";

let value: ListEventsData = {
  id: 42,
  slug: "san-diego-comic-con-2026",
  name: "San Diego Comic-Con 2026",
  type: "convention",
  startDate: "2026-07-23",
  endDate: "2026-07-26",
  isOnline: false,
  isFcbd: false,
  venueName: "San Diego Convention Center",
  city: "San Diego",
  region: "CA",
  countryCode: "US",
  fullLocation: "San Diego Convention Center, San Diego, CA, United States",
  logoUrl: "https://...-tile_sm.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    fullMd: "https://...-full_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  ticketPrice: "$45.00 - $150.00",
  followerCount: 320,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 42                                                                           |
| `slug`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | san-diego-comic-con-2026                                                     |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | San Diego Comic-Con 2026                                                     |
| `type`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | convention                                                                   |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2026-07-23                                                                   |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2026-07-26                                                                   |
| `isOnline`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          | false                                                                        |
| `isFcbd`                                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          | false                                                                        |
| `venueName`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | San Diego Convention Center                                                  |
| `city`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | San Diego                                                                    |
| `region`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | CA                                                                           |
| `countryCode`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | US                                                                           |
| `fullLocation`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | San Diego Convention Center, San Diego, CA, United States                    |
| `logoUrl`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | https://...-tile_sm.webp                                                     |
| `images`                                                                     | [operations.ListEventsImages](../../models/operations/list-events-images.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `ticketPrice`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | $45.00 - $150.00                                                             |
| `followerCount`                                                              | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 320                                                                          |