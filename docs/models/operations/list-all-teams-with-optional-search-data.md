# ListAllTeamsWithOptionalSearchData

## Example Usage

```typescript
import { ListAllTeamsWithOptionalSearchData } from "@versedbcom/sdk/models/operations";

let value: ListAllTeamsWithOptionalSearchData = {
  id: 12,
  name: "Avengers",
  slug: "avengers",
  aliases: [
    "Earth's Mightiest Heroes",
  ],
  headquarters: "Avengers Tower, New York City",
  membersCount: 42,
  appearancesCount: 1250,
  imageUrl: "https://images.versedb.com/teams/avengers/tile_sm.webp",
  images: {
    tileSm: "https://images.versedb.com/teams/avengers/tile_sm.webp",
    profileMd: "https://images.versedb.com/teams/avengers/profile_md.webp",
    fullLg: "https://images.versedb.com/teams/avengers/full_lg.webp",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | 12                                                                                                                       |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | Avengers                                                                                                                 |
| `slug`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | avengers                                                                                                                 |
| `aliases`                                                                                                                | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | [<br/>"Earth's Mightiest Heroes"<br/>]                                                                                   |
| `headquarters`                                                                                                           | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | Avengers Tower, New York City                                                                                            |
| `membersCount`                                                                                                           | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | 42                                                                                                                       |
| `appearancesCount`                                                                                                       | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | 1250                                                                                                                     |
| `imageUrl`                                                                                                               | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | https://images.versedb.com/teams/avengers/tile_sm.webp                                                                   |
| `images`                                                                                                                 | [operations.ListAllTeamsWithOptionalSearchImages](../../models/operations/list-all-teams-with-optional-search-images.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |