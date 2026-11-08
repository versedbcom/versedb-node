# Event

## Example Usage

```typescript
import { Event } from "@versedbcom/sdk/models/operations";

let value: Event = {
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
  isOnline: null,
  isFcbd: true,
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 42                                                                                     |
| `slug`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | midtown-signing-2026                                                                   |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | Midtown Signing                                                                        |
| `nameI18n`                                                                             | Record<string, [operations.EventNameI18n](../../models/operations/event-name-i18n.md)> | :heavy_check_mark:                                                                     | One name per language, keyed by BCP 47 tag.                                            | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>} |
| `aliasesI18n`                                                                          | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | Alternative names per language.                                                        | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                        |
| `originalLocale`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | The language the entity is from, a BCP 47 tag.                                         | en                                                                                     |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | convention or store_event.                                                             | store_event                                                                            |
| `startDate`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 2026-07-23                                                                             |
| `endDate`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 2026-07-23                                                                             |
| `startTime`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 10:00:00                                                                               |
| `endTime`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 14:00:00                                                                               |
| `timezone`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | America/New_York                                                                       |
| `isOnline`                                                                             | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `isFcbd`                                                                               | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `status`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | scheduled, cancelled, postponed or moved_online.                                       | scheduled                                                                              |
| `venueName`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | Midtown Comics                                                                         |
| `city`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | New York                                                                               |
| `region`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | NY                                                                                     |
| `countryCode`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | US                                                                                     |
| `fullLocation`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | `Online Event` for an online event, `Location TBA` when nothing is known.              | Midtown Comics, New York, NY, United States                                            |
| `logoUrl`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | https://...-tile_sm.webp                                                               |
| `images`                                                                               | [operations.EventImages](../../models/operations/event-images.md)                      | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `ticketPrice`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | Free                                                                                   |
| `followerCount`                                                                        | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 12                                                                                     |