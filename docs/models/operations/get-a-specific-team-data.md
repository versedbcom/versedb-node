# GetASpecificTeamData

## Example Usage

```typescript
import { GetASpecificTeamData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTeamData = {
  id: 78,
  name: "Avengers",
  slug: "avengers",
  aliases: [
    "Earth's Mightiest Heroes",
  ],
  description:
    "A team of superheroes formed to confront threats no single hero could withstand.",
  formationDate: "1963-09-01",
  disbandedDate: null,
  headquarters: "Avengers Tower, New York",
  membersCount: 312,
  seriesCount: 48,
  appearancesCount: 5200,
  listsCount: 86,
  imageUrl:
    "https://r2.versedb.com/uploads/teams/avengers-78/avengers-78-full_lg.webp",
  images: {
    tileSm:
      "https://r2.versedb.com/uploads/teams/avengers-78/avengers-78-tile_sm.webp",
    profileMd:
      "https://r2.versedb.com/uploads/teams/avengers-78/avengers-78-profile_md.webp",
    fullLg:
      "https://r2.versedb.com/uploads/teams/avengers-78/avengers-78-full_lg.webp",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | 78                                                                                         |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | Avengers                                                                                   |
| `slug`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | avengers                                                                                   |
| `aliases`                                                                                  | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        | [<br/>"Earth's Mightiest Heroes"<br/>]                                                     |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | A team of superheroes formed to confront threats no single hero could withstand.           |
| `formationDate`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | 1963-09-01                                                                                 |
| `disbandedDate`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | null                                                                                       |
| `headquarters`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | Avengers Tower, New York                                                                   |
| `membersCount`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | 312                                                                                        |
| `seriesCount`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | 48                                                                                         |
| `appearancesCount`                                                                         | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | 5200                                                                                       |
| `listsCount`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | 86                                                                                         |
| `imageUrl`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        | https://r2.versedb.com/uploads/teams/avengers-78/avengers-78-full_lg.webp                  |
| `images`                                                                                   | [operations.GetASpecificTeamImages](../../models/operations/get-a-specific-team-images.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |