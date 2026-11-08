# GetSeriesDetailsCharacter

## Example Usage

```typescript
import { GetSeriesDetailsCharacter } from "@versedbcom/sdk/models/operations";

let value: GetSeriesDetailsCharacter = {
  id: 1,
  name: "Spider-Man",
  slug: "spider-man",
  realName: "Peter Parker",
  aliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  imageUrl: "https://...-full_lg.webp",
  appearancesCount: 400,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *number*                 | :heavy_check_mark:       | N/A                      | 1                        |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      | Spider-Man               |
| `slug`                   | *string*                 | :heavy_check_mark:       | N/A                      | spider-man               |
| `realName`               | *string*                 | :heavy_check_mark:       | N/A                      | Peter Parker             |
| `aliases`                | *any*[]                  | :heavy_check_mark:       | N/A                      |                          |
| `imageUrl`               | *string*                 | :heavy_check_mark:       | N/A                      | https://...-full_lg.webp |
| `appearancesCount`       | *number*                 | :heavy_check_mark:       | N/A                      | 400                      |
| `additionalProperties`   | Record<string, *any*>    | :heavy_minus_sign:       | N/A                      |                          |