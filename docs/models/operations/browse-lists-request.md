# BrowseListsRequest

## Example Usage

```typescript
import { BrowseListsRequest } from "@versedbcom/sdk/models/operations";

let value: BrowseListsRequest = {
  q: "spider-man",
  entityType: "issues",
  sort: "popular",
  limit: 20,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `q`                                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | Search by list title.                                                            | spider-man                                                                       |
| `entityType`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Filter by entity type (issues, series, characters, creators, story_arcs, teams). | issues                                                                           |
| `sort`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | Sort order (featured, newest, popular, most_saved). Default: featured.           | popular                                                                          |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Items per page (max 100).                                                        | 20                                                                               |