# GetAComicShopData

## Example Usage

```typescript
import { GetAComicShopData } from "@versedbcom/sdk/models/operations";

let value: GetAComicShopData = {
  id: 42,
  name: "Midtown Comics",
  description: "Flagship comic shop in the heart of Manhattan.",
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
    monday: "10am - 8pm",
    saturday: "10am - 9pm",
    sunday: "11am - 6pm",
  },
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 42                                                                                   |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | Midtown Comics                                                                       |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | Flagship comic shop in the heart of Manhattan.                                       |
| `address`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 200 W 40th St                                                                        |
| `city`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | New York                                                                             |
| `stateProvince`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | NY                                                                                   |
| `postalCode`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 10018                                                                                |
| `country`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | US                                                                                   |
| `website`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | https://www.midtowncomics.com                                                        |
| `fullAddress`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 200 W 40th St, New York, NY 10018                                                    |
| `logoUrl`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | https://r2.versedb.com/uploads/shops/midtown-42/midtown-42-full_lg.webp              |
| `images`                                                                             | [operations.GetAComicShopImages](../../models/operations/get-a-comic-shop-images.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `operatingHours`                                                                     | [operations.OperatingHours](../../models/operations/operating-hours.md)              | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `services`                                                                           | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  | [<br/>"New Comics",<br/>"Back Issues",<br/>"Pull Lists",<br/>"Grading"<br/>]         |
| `events`                                                                             | *any*[]                                                                              | :heavy_minus_sign:                                                                   | N/A                                                                                  | []                                                                                   |