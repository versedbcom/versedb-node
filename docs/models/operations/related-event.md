# RelatedEvent

## Example Usage

```typescript
import { RelatedEvent } from "@versedbcom/sdk/models/operations";

let value: RelatedEvent = {
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
  isOnline: false,
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
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 42                                                                                                    |
| `slug`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | san-diego-comic-con-2026                                                                              |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | San Diego Comic-Con 2026                                                                              |
| `nameI18n`                                                                                            | Record<string, [operations.RelatedEventNameI18n](../../models/operations/related-event-name-i18n.md)> | :heavy_check_mark:                                                                                    | One name per language, keyed by BCP 47 tag.                                                           | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}           |
| `aliasesI18n`                                                                                         | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | Alternative names per language.                                                                       | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                       |
| `originalLocale`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | The language the entity is from, a BCP 47 tag.                                                        | en                                                                                                    |
| `type`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | convention or store_event.                                                                            | convention                                                                                            |
| `startDate`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 2026-07-23                                                                                            |
| `endDate`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 2026-07-26                                                                                            |
| `startTime`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 10:00:00                                                                                              |
| `endTime`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 18:00:00                                                                                              |
| `timezone`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | America/Los_Angeles                                                                                   |
| `isOnline`                                                                                            | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `isFcbd`                                                                                              | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `status`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | scheduled, cancelled, postponed or moved_online.                                                      | scheduled                                                                                             |
| `venueName`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | San Diego Convention Center                                                                           |
| `city`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | San Diego                                                                                             |
| `region`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | California                                                                                            |
| `countryCode`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | US                                                                                                    |
| `fullLocation`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | `Online Event` for an online event, `Location TBA` when nothing is known.                             | San Diego Convention Center, San Diego, California, United States                                     |
| `logoUrl`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | https://...-tile_sm.webp                                                                              |
| `images`                                                                                              | [operations.RelatedEventImages](../../models/operations/related-event-images.md)                      | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `ticketPrice`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | USD $45.00 – $150.00                                                                                  |
| `followerCount`                                                                                       | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 320                                                                                                   |