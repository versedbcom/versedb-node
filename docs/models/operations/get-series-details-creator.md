# GetSeriesDetailsCreator

## Example Usage

```typescript
import { GetSeriesDetailsCreator } from "@versedbcom/sdk/models/operations";

let value: GetSeriesDetailsCreator = {
  id: 81,
  name: "Nick Spencer",
  slug: "nick-spencer",
  photoUrl: "https://...-profile_md.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  role: "Writer",
  isUncredited: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 81                                                                                                       |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | Nick Spencer                                                                                             |
| `slug`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | nick-spencer                                                                                             |
| `photoUrl`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | https://...-profile_md.webp                                                                              |
| `images`                                                                                                 | [operations.GetSeriesDetailsCreatorImages](../../models/operations/get-series-details-creator-images.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `role`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | Writer                                                                                                   |
| `isUncredited`                                                                                           | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |