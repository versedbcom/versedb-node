# ListCharactersRequest

## Example Usage

```typescript
import { ListCharactersRequest } from "@versedbcom/sdk/models/operations";

let value: ListCharactersRequest = {
  q: "spider-man",
  publisherIds: "1,2",
  roles: "hero",
  powers: "flight",
  sort: "name",
  limit: 20,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `q`                                                                                                           | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Search by character name. Without a search hit, matches the name or real name containing it.                  | spider-man                                                                                                    |
| `publisherIds`                                                                                                | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Comma-separated publisher IDs. Returns characters published by any of them.                                   | 1,2                                                                                                           |
| `roles`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Comma-separated character roles (name or slug, such as hero or villain). Returns characters with any of them. | hero                                                                                                          |
| `powers`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Comma-separated power slugs. Returns characters with any of them.                                             | flight                                                                                                        |
| `sort`                                                                                                        | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Pass any value to replace the relevance ordering applied to q results with the name.                          | name                                                                                                          |
| `limit`                                                                                                       | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Results per page (max 50).                                                                                    | 20                                                                                                            |
| `page`                                                                                                        | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Page number; meta.last_page says where the list ends.                                                         | 1                                                                                                             |
| `languages`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes.          | ja,ko                                                                                                         |