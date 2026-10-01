# GetAComicShopResponseBody

Success

## Example Usage

```typescript
import { GetAComicShopResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetAComicShopResponseBody = {
  data: {
    id: 42,
    name: "Midtown Comics",
    address: "200 W 40th St",
    city: "New York",
    stateProvince: "NY",
    postalCode: "10018",
    country: "US",
    website: "https://www.midtowncomics.com",
    fullAddress: "200 W 40th St, New York, NY 10018",
    logoUrl:
      "https://r2.versedb.com/uploads/shops/midtown-42/midtown-42-full_lg.webp",
    images: {
      tileSm:
        "https://r2.versedb.com/uploads/shops/midtown-42/midtown-42-tile_sm.webp",
      fullLg:
        "https://r2.versedb.com/uploads/shops/midtown-42/midtown-42-full_lg.webp",
    },
    operatingHours: {
      monday: "10:00-20:00",
      saturday: "10:00-21:00",
      sunday: "closed",
    },
    specialHours: [
      {
        from: "2026-12-25",
        to: "2026-12-26",
        hours: "closed",
        note: "Closed for the holidays",
      },
      {
        from: "2026-12-31",
        to: "2026-12-31",
        hours: "10:00-16:00",
        note: "Closed for the holidays",
      },
    ],
    services: [
      "New Comics",
      "Back Issues",
      "Pull Lists",
      "Grading",
    ],
    events: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.GetAComicShopData](../../models/operations/get-a-comic-shop-data.md) | :heavy_minus_sign:                                                               | N/A                                                                              |