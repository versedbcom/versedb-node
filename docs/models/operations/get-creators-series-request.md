# GetCreatorsSeriesRequest

## Example Usage

```typescript
import { GetCreatorsSeriesRequest } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsSeriesRequest = {
  creatorId: 789,
  limit: 20,
  q: "batman",
  medium: "comic,manga",
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `creatorId`                                                                                           | *number*                                                                                              | :heavy_check_mark:                                                                                    | The creator ID.                                                                                       | 789                                                                                                   |
| `limit`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Results per page (max 50).                                                                            | 20                                                                                                    |
| `q`                                                                                                   | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Optional case-insensitive search within these results.                                                | batman                                                                                                |
| `medium`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Comma-separated series mediums to filter by (comic, manga, manhwa, manhua, bande_dessinee, magazine). | comic,manga                                                                                           |
| `page`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Page number; meta.last_page says where the list ends.                                                 | 1                                                                                                     |
| `languages`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes.  | ja,ko                                                                                                 |