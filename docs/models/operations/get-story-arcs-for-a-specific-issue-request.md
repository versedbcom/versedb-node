# GetStoryArcsForASpecificIssueRequest

## Example Usage

```typescript
import { GetStoryArcsForASpecificIssueRequest } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificIssueRequest = {
  issueId: 5432,
  q: "spider",
  limit: 20,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | The issue ID.                                                                                        | 5432                                                                                                 |
| `q`                                                                                                  | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional case-insensitive search within these results.                                               | spider                                                                                               |
| `limit`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Number of results per page (max 50).                                                                 | 20                                                                                                   |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Page number; meta.last_page says where the list ends.                                                | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |