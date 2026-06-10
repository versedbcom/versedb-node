# ListComicShopsData

## Example Usage

```typescript
import { ListComicShopsData } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsData = {
  id: 42,
  name: "Midtown Comics",
  city: "New York",
  stateProvince: "NY",
  country: "United States",
  latitude: 40.7549,
  longitude: -73.984,
  logoUrl:
    "https://r2.versedb.com/uploads/comic-shops/midtown-comics-42/midtown-comics-42-abc123-tile_sm.webp",
  images: {
    tileSm:
      "https://r2.versedb.com/uploads/comic-shops/midtown-comics-42/midtown-comics-42-abc123-tile_sm.webp",
    fullLg:
      "https://r2.versedb.com/uploads/comic-shops/midtown-comics-42/midtown-comics-42-abc123-full_lg.webp",
  },
  isFavorited: false,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 42                                                                                                 |
| `name`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | Midtown Comics                                                                                     |
| `city`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | New York                                                                                           |
| `stateProvince`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | NY                                                                                                 |
| `country`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | United States                                                                                      |
| `latitude`                                                                                         | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 40.7549                                                                                            |
| `longitude`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | -73.984                                                                                            |
| `logoUrl`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | https://r2.versedb.com/uploads/comic-shops/midtown-comics-42/midtown-comics-42-abc123-tile_sm.webp |
| `images`                                                                                           | [operations.ListComicShopsImages](../../models/operations/list-comic-shops-images.md)              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `isFavorited`                                                                                      | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                | false                                                                                              |