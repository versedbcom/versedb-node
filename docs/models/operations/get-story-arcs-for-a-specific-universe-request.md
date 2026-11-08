# GetStoryArcsForASpecificUniverseRequest

## Example Usage

```typescript
import { GetStoryArcsForASpecificUniverseRequest } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificUniverseRequest = {
  universeId: 1,
  q: "crisis",
  limit: 20,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `universeId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | The universe ID.                                                                                     | 1                                                                                                    |
| `q`                                                                                                  | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional case-insensitive search within these results.                                               | crisis                                                                                               |
| `limit`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Number of results per page (max 50).                                                                 | 20                                                                                                   |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Page number; meta.last_page says where the list ends.                                                | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |