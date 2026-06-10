# GetSeriesDetailsCharacter

## Example Usage

```typescript
import { GetSeriesDetailsCharacter } from "@versedbcom/sdk/models/operations";

let value: GetSeriesDetailsCharacter = {
  id: 456,
  name: "Spider-Man (Peter Parker)",
  slug: "spider-man-peter-parker",
  realName: "Peter Parker",
  aliases: [],
  imageUrl: "https://...",
  appearancesCount: 75,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `id`                      | *number*                  | :heavy_minus_sign:        | N/A                       | 456                       |
| `name`                    | *string*                  | :heavy_minus_sign:        | N/A                       | Spider-Man (Peter Parker) |
| `slug`                    | *string*                  | :heavy_minus_sign:        | N/A                       | spider-man-peter-parker   |
| `realName`                | *string*                  | :heavy_minus_sign:        | N/A                       | Peter Parker              |
| `aliases`                 | *any*[]                   | :heavy_minus_sign:        | N/A                       | []                        |
| `imageUrl`                | *string*                  | :heavy_minus_sign:        | N/A                       | https://...               |
| `appearancesCount`        | *number*                  | :heavy_minus_sign:        | N/A                       | 75                        |