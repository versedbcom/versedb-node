# CreateListRequest

## Example Usage

```typescript
import { CreateListRequest } from "@versedbcom/sdk/models/operations";

let value: CreateListRequest = {
  title: "Best Spider-Man Stories",
  description: "My favorite Spidey moments ranked",
  entityType: "issues",
  isRanked: true,
  isPrivate: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `title`                                                                | *string*                                                               | :heavy_check_mark:                                                     | List title (max 100 chars).                                            | Best Spider-Man Stories                                                |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | List description (max 500 chars).                                      | My favorite Spidey moments ranked                                      |
| `entityType`                                                           | *string*                                                               | :heavy_check_mark:                                                     | Entity type (issues, series, characters, creators, story_arcs, teams). | issues                                                                 |
| `isRanked`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether items are ranked/ordered.                                      | true                                                                   |
| `isPrivate`                                                            | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether the list is private.                                           | false                                                                  |