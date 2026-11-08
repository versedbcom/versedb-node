# GetIssueDetailsTeam

## Example Usage

```typescript
import { GetIssueDetailsTeam } from "@versedbcom/sdk/models/operations";

let value: GetIssueDetailsTeam = {
  id: 1,
  name: "The Avengers",
  slug: "avengers",
  headquarters: "Avengers Tower",
  imageUrl: "https://...-tile_sm.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  sortOrder: 1,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             | 1                                                               |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             | The Avengers                                                    |
| `slug`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             | avengers                                                        |
| `headquarters`                                                  | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             | Avengers Tower                                                  |
| `imageUrl`                                                      | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             | https://...-tile_sm.webp                                        |
| `images`                                                        | [operations.TeamImages](../../models/operations/team-images.md) | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `sortOrder`                                                     | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             | 1                                                               |