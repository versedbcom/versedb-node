# GetASpecificTeamResponseBody

Success

## Example Usage

```typescript
import { GetASpecificTeamResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTeamResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.GetASpecificTeamData](../../models/operations/get-a-specific-team-data.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |