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
    alterEgo: [
      "Spidey",
    ],
    gender: "male",
    birthday: "2001-08-10",
    race: "Human",
    birthPlace: "Queens, New York",
    occupation: "Photographer, Scientist",
    height: "5'10\"",
    weight: "167 lbs",
    citizenship: "American",
    education: "College",
    appearancesCount: 12500,
    seriesCount: 320,
    teamsCount: 8,
    storyArcsCount: 47,
    eyeColor: "Hazel",
    hairColor: "Brown",
    powers: [
      "Super strength",
      "Wall-crawling",
      "Spider-sense",
    ],
    weaknesses: [
      "Ethyl chloride",
    ],
    equipment: [
      "Web-shooters",
    ],
    abilities: [
      "Genius-level intellect",
    ],
    roles: [
      "Hero",
    ],
    publisher: {
      id: 1,
      name: "Marvel",
      slug: "marvel",
    },
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
    realNameI18n: {
      "ja": {
        value: "講談社",
        source: "madb",
        reading: "こうだんしゃ",
      },
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetCharacterDetailsData](../../models/operations/get-character-details-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |