# GetCreatorDetailsResponseBody

Success

## Example Usage

```typescript
import { GetCreatorDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCreatorDetailsResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.GetCreatorDetailsData](../../models/operations/get-creator-details-data.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |