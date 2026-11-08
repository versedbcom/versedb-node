# BrowseSystemListsRequest

## Example Usage

```typescript
import { BrowseSystemListsRequest } from "@versedbcom/sdk/models/operations";

let value: BrowseSystemListsRequest = {
  entityType: "issues",
  sort: "popular",
  limit: 20,
  page: 1,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `entityType`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Filter by entity type (issues, series, characters, creators, story_arcs, teams). | issues                                                                           |
| `sort`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | Sort order (newest, popular).                                                    | popular                                                                          |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Items per page (max 100).                                                        | 20                                                                               |
| `page`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | Page number; meta.last_page says where the list ends.                            | 1                                                                                |