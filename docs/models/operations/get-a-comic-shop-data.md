# GetAComicShopData

## Example Usage

```typescript
import { GetAComicShopData } from "@versedbcom/sdk/models/operations";

let value: GetAComicShopData = {
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
  images: {
    tileSm: "https://...-tile_sm.webp",
    fullLg: "https://...-full_lg.webp",
  },
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
  events: [],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 42                                                                                                                 |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | Midtown Comics                                                                                                     |
| `nameI18n`                                                                                                         | Record<string, [operations.GetAComicShopNameI18n](../../models/operations/get-a-comic-shop-name-i18n.md)>          | :heavy_check_mark:                                                                                                 | One name per language, keyed by BCP 47 tag.                                                                        | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                        |
| `aliasesI18n`                                                                                                      | Record<string, *string*[]>                                                                                         | :heavy_check_mark:                                                                                                 | Alternative names per language.                                                                                    | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                    |
| `originalLocale`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The language the entity is from, a BCP 47 tag.                                                                     | en                                                                                                                 |
| `address`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 200 W 40th St                                                                                                      |
| `city`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | New York                                                                                                           |
| `stateProvince`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | NY                                                                                                                 |
| `postalCode`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 10018                                                                                                              |
| `country`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | United States                                                                                                      |
| `countryCode`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | US                                                                                                                 |
| `website`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | https://www.midtowncomics.com                                                                                      |
| `fullAddress`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 200 W 40th St, New York, NY, 10018, United States                                                                  |
| `logoUrl`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | https://...-tile_sm.webp                                                                                           |
| `images`                                                                                                           | [operations.GetAComicShopImages](../../models/operations/get-a-comic-shop-images.md)                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `operatingHours`                                                                                                   | *operations.OperatingHoursUnion*                                                                                   | :heavy_check_mark:                                                                                                 | Monday first, by lowercase day name; `closed` or 24-hour ranges joined by commas. A missing day has unknown hours. | {<br/>"monday": "10:00-20:00",<br/>"sunday": "closed"<br/>}                                                        |
| `specialHours`                                                                                                     | [operations.SpecialHour](../../models/operations/special-hour.md)[]                                                | :heavy_check_mark:                                                                                                 | Dated exceptions that have not ended, by start date.                                                               | [<br/>{<br/>"from": "2026-12-25",<br/>"to": "2026-12-26",<br/>"hours": "closed",<br/>"note": "Closed for the holidays"<br/>}<br/>] |
| `relatedShops`                                                                                                     | [operations.RelatedShop](../../models/operations/related-shop.md)[]                                                | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `services`                                                                                                         | *string*[]                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | [<br/>"New Comics",<br/>"Back Issues",<br/>"Pull Lists",<br/>"Grading"<br/>]                                       |
| `events`                                                                                                           | [operations.Event](../../models/operations/event.md)[]                                                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |