# ListImprintsRequest

## Example Usage

```typescript
import { ListImprintsRequest } from "@versedbcom/sdk/models/operations";

let value: ListImprintsRequest = {
  q: "vertigo",
  publisherId: 2,
  sort: "name",
  direction: "asc",
  limit: 20,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `q`                                        | *string*                                   | :heavy_minus_sign:                         | Search by imprint name.                    | vertigo                                    |
| `publisherId`                              | *number*                                   | :heavy_minus_sign:                         | Filter by publisher ID.                    | 2                                          |
| `sort`                                     | *string*                                   | :heavy_minus_sign:                         | Sort field (name, created_at, updated_at). | name                                       |
| `direction`                                | *string*                                   | :heavy_minus_sign:                         | Sort direction (asc, desc).                | asc                                        |
| `limit`                                    | *number*                                   | :heavy_minus_sign:                         | Number of results per page (max 50).       | 20                                         |