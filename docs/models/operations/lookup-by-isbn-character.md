# LookupByISBNCharacter

## Example Usage

```typescript
import { LookupByISBNCharacter } from "@versedbcom/sdk/models/operations";

let value: LookupByISBNCharacter = {
  id: 1,
  name: "Spider-Man",
  slug: "spider-man",
  realName: "Peter Parker",
  imageUrl: "https://...-profile_md.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
  sortOrder: 1,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 1                                                                                                    |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | Spider-Man                                                                                           |
| `slug`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | spider-man                                                                                           |
| `realName`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | Peter Parker                                                                                         |
| `imageUrl`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | https://...-profile_md.webp                                                                          |
| `images`                                                                                             | [operations.LookupByISBNCharacterImages](../../models/operations/lookup-by-isbn-character-images.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `sortOrder`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 1                                                                                                    |