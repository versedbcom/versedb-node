# GetCharacterIssuesRequest

## Example Usage

```typescript
import { GetCharacterIssuesRequest } from "@versedbcom/sdk/models/operations";

let value: GetCharacterIssuesRequest = {
  characterId: 456,
  q: "batman",
  limit: 20,
  page: 1,
  medium: "comic,manga",
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `characterId`                                                                                         | *number*                                                                                              | :heavy_check_mark:                                                                                    | The character ID.                                                                                     | 456                                                                                                   |
| `q`                                                                                                   | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Optional case-insensitive search within these results.                                                | batman                                                                                                |
| `limit`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Results per page (max 50).                                                                            | 20                                                                                                    |
| `page`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Page number; meta.last_page says where the list ends.                                                 | 1                                                                                                     |
| `medium`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Comma-separated series mediums to filter by (comic, manga, manhwa, manhua, bande_dessinee, magazine). | comic,manga                                                                                           |
| `languages`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes.  | ja,ko                                                                                                 |