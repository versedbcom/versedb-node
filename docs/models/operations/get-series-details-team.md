# GetSeriesDetailsTeam

## Example Usage

```typescript
import { GetSeriesDetailsTeam } from "@versedbcom/sdk/models/operations";

let value: GetSeriesDetailsTeam = {
  id: 1,
  name: "The Avengers",
  slug: "avengers",
  imageUrl: "https://...-tile_sm.webp",
  membersCount: 12,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *number*                 | :heavy_check_mark:       | N/A                      | 1                        |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      | The Avengers             |
| `slug`                   | *string*                 | :heavy_check_mark:       | N/A                      | avengers                 |
| `imageUrl`               | *string*                 | :heavy_check_mark:       | N/A                      | https://...-tile_sm.webp |
| `membersCount`           | *number*                 | :heavy_check_mark:       | N/A                      | 12                       |
| `additionalProperties`   | Record<string, *any*>    | :heavy_minus_sign:       | N/A                      |                          |