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
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 456                                                                                                                           |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | Spider-Man (Peter Parker)                                                                                                     |
| `slug`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | spider-man-peter-parker                                                                                                       |
| `realName`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | Peter Parker                                                                                                                  |
| `aliases`                                                                                                                     | *string*[]                                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | [<br/>"Spidey",<br/>"Web-Head",<br/>"Webslinger"<br/>]                                                                        |
| `imageUrl`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | https://...-full_lg.webp                                                                                                      |
| `images`                                                                                                                      | [operations.GetCharacterDetailsImages](../../models/operations/get-character-details-images.md)                               | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `alterEgo`                                                                                                                    | *operations.GetCharacterDetailsAlterEgo*                                                                                      | :heavy_check_mark:                                                                                                            | Other identities, as stored: a list of strings in production.                                                                 | [<br/>"Spidey"<br/>]                                                                                                          |
| `gender`                                                                                                                      | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | male                                                                                                                          |
| `birthday`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 2001-08-10                                                                                                                    |
| `race`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | Human                                                                                                                         |
| `birthPlace`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | Queens, New York                                                                                                              |
| `occupation`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | Photographer, Scientist                                                                                                       |
| `height`                                                                                                                      | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 5'10"                                                                                                                         |
| `weight`                                                                                                                      | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 167 lbs                                                                                                                       |
| `citizenship`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | American                                                                                                                      |
| `education`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | College                                                                                                                       |
| `appearancesCount`                                                                                                            | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 12500                                                                                                                         |
| `seriesCount`                                                                                                                 | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 320                                                                                                                           |
| `teamsCount`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 8                                                                                                                             |
| `storyArcsCount`                                                                                                              | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           | 47                                                                                                                            |
| `eyeColor`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Present when the character has one.                                                                                           | Hazel                                                                                                                         |
| `hairColor`                                                                                                                   | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Present when the character has one.                                                                                           | Brown                                                                                                                         |
| `powers`                                                                                                                      | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Present when the character has one.                                                                                           | [<br/>"Super strength",<br/>"Wall-crawling",<br/>"Spider-sense"<br/>]                                                         |
| `weaknesses`                                                                                                                  | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Present when the character has one.                                                                                           | [<br/>"Ethyl chloride"<br/>]                                                                                                  |
| `equipment`                                                                                                                   | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Present when the character has one.                                                                                           | [<br/>"Web-shooters"<br/>]                                                                                                    |
| `abilities`                                                                                                                   | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Present when the character has one.                                                                                           | [<br/>"Genius-level intellect"<br/>]                                                                                          |
| `roles`                                                                                                                       | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Present when the character has one.                                                                                           | [<br/>"Hero"<br/>]                                                                                                            |
| `publisher`                                                                                                                   | [operations.GetCharacterDetailsPublisher](../../models/operations/get-character-details-publisher.md)                         | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `nameI18n`                                                                                                                    | Record<string, [operations.GetCharacterDetailsNameI18n](../../models/operations/get-character-details-name-i18n.md)>          | :heavy_check_mark:                                                                                                            | One name per language, keyed by BCP 47 tag.                                                                                   | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                                   |
| `aliasesI18n`                                                                                                                 | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | Alternative names per language.                                                                                               | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                               |
| `originalLocale`                                                                                                              | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The language the entity is from, a BCP 47 tag.                                                                                | en                                                                                                                            |
| `realNameI18n`                                                                                                                | Record<string, [operations.GetCharacterDetailsRealNameI18n](../../models/operations/get-character-details-real-name-i18n.md)> | :heavy_check_mark:                                                                                                            | One name per language, keyed by BCP 47 tag.                                                                                   | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                                   |