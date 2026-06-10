# ListCharactersData

## Example Usage

```typescript
import { ListCharactersData } from "@versedbcom/sdk/models/operations";

let value: ListCharactersData = {
  id: 456,
  name: "Spider-Man (Peter Parker)",
  slug: "spider-man-peter-parker",
  realName: "Peter Parker",
  aliases: [
    "Spidey",
    "Web-Head",
  ],
  imageUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 456                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | Spider-Man (Peter Parker)                                                            |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | spider-man-peter-parker                                                              |
| `realName`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | Peter Parker                                                                         |
| `aliases`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  | [<br/>"Spidey",<br/>"Web-Head"<br/>]                                                 |
| `imageUrl`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | https://...-full_lg.webp                                                             |
| `images`                                                                             | [operations.ListCharactersImages](../../models/operations/list-characters-images.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |