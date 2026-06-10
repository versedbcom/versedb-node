# GetCreatorDetailsData

## Example Usage

```typescript
import { GetCreatorDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetCreatorDetailsData = {
  id: 789,
  name: "Alan Moore",
  slug: "alan-moore",
  role: {
    id: 1,
    name: "Writer",
  },
  photoUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  biography: "Alan Moore is a British comic book writer...",
  gender: "male",
  birth: "1953-11-18",
  death: null,
  birthPlace: "Northampton, England",
  country: "United Kingdom",
  aliases: [],
  links: {},
  awards: [
    {
      name: "Eisner Award",
      year: 1988,
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 789                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Alan Moore                                                                                  |
| `slug`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | alan-moore                                                                                  |
| `role`                                                                                      | [operations.GetCreatorDetailsRole](../../models/operations/get-creator-details-role.md)     | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `photoUrl`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | https://...-full_lg.webp                                                                    |
| `images`                                                                                    | [operations.GetCreatorDetailsImages](../../models/operations/get-creator-details-images.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `biography`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Alan Moore is a British comic book writer...                                                |
| `gender`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | male                                                                                        |
| `birth`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 1953-11-18                                                                                  |
| `death`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | null                                                                                        |
| `birthPlace`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Northampton, England                                                                        |
| `country`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | United Kingdom                                                                              |
| `aliases`                                                                                   | *any*[]                                                                                     | :heavy_minus_sign:                                                                          | N/A                                                                                         | []                                                                                          |
| `links`                                                                                     | [operations.GetCreatorDetailsLinks](../../models/operations/get-creator-details-links.md)   | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `awards`                                                                                    | [operations.Award](../../models/operations/award.md)[]                                      | :heavy_minus_sign:                                                                          | N/A                                                                                         | [<br/>{<br/>"name": "Eisner Award",<br/>"year": 1988<br/>}<br/>]                            |