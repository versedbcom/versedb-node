# GetCharacterDetailsResponseBody

Success

## Example Usage

```typescript
import { GetCharacterDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharacterDetailsResponseBody = {
  data: {
    id: 456,
    name: "Spider-Man (Peter Parker)",
    slug: "spider-man-peter-parker",
    realName: "Peter Parker",
    aliases: [
      "Spidey",
      "Web-Head",
      "Webslinger",
    ],
    imageUrl: "https://...-full_lg.webp",
    images: {
      tileSm: "https://...-tile_sm.webp",
      profileMd: "https://...-profile_md.webp",
      fullLg: "https://...-full_lg.webp",
    },
    description: "Peter Parker was bitten by a radioactive spider...",
    alterEgo: [],
    gender: "male",
    race: "Human",
    birthPlace: "Queens, New York",
    occupation: "Photographer, Scientist",
    appearancesCount: 12500,
    seriesCount: 320,
    teamsCount: 8,
    storyArcsCount: 47,
    powers: [
      "Super strength",
      "Wall-crawling",
      "Spider-sense",
    ],
    publisher: {
      id: 1,
      name: "Marvel",
      slug: "marvel",
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetCharacterDetailsData](../../models/operations/get-character-details-data.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |