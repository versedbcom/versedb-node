# GetAnEventCreator

## Example Usage

```typescript
import { GetAnEventCreator } from "@versedbcom/sdk/models/operations";

let value: GetAnEventCreator = {
  id: 7,
  name: "Stan Lee",
  slug: "stan-lee",
  photoUrl: "https://...-profile_md.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  country: "US",
  appearanceTypes: [
    "Guest",
    "Signing",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 7                                                                                            |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | Stan Lee                                                                                     |
| `slug`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | stan-lee                                                                                     |
| `photoUrl`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | https://...-profile_md.webp                                                                  |
| `images`                                                                                     | [operations.GetAnEventCreatorImages](../../models/operations/get-an-event-creator-images.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `country`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | US                                                                                           |
| `appearanceTypes`                                                                            | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          | [<br/>"Guest",<br/>"Signing"<br/>]                                                           |