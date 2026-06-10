# GetCharacterDetailsData

## Example Usage

```typescript
import { GetCharacterDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetCharacterDetailsData = {
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
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 456                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Spider-Man (Peter Parker)                                                                             |
| `slug`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | spider-man-peter-parker                                                                               |
| `realName`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Peter Parker                                                                                          |
| `aliases`                                                                                             | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | [<br/>"Spidey",<br/>"Web-Head",<br/>"Webslinger"<br/>]                                                |
| `imageUrl`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | https://...-full_lg.webp                                                                              |
| `images`                                                                                              | [operations.GetCharacterDetailsImages](../../models/operations/get-character-details-images.md)       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `description`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Peter Parker was bitten by a radioactive spider...                                                    |
| `alterEgo`                                                                                            | *any*[]                                                                                               | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | []                                                                                                    |
| `gender`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | male                                                                                                  |
| `race`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Human                                                                                                 |
| `birthPlace`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Queens, New York                                                                                      |
| `occupation`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Photographer, Scientist                                                                               |
| `appearancesCount`                                                                                    | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 12500                                                                                                 |
| `seriesCount`                                                                                         | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 320                                                                                                   |
| `teamsCount`                                                                                          | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 8                                                                                                     |
| `storyArcsCount`                                                                                      | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 47                                                                                                    |
| `powers`                                                                                              | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | [<br/>"Super strength",<br/>"Wall-crawling",<br/>"Spider-sense"<br/>]                                 |
| `publisher`                                                                                           | [operations.GetCharacterDetailsPublisher](../../models/operations/get-character-details-publisher.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |