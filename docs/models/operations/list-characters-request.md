# ListCharactersRequest

## Example Usage

```typescript
import { ListCharactersRequest } from "@versedbcom/sdk/models/operations";

let value: ListCharactersRequest = {
  q: "spider-man",
  sort: "name",
  direction: "asc",
  limit: 20,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `q`                                        | *string*                                   | :heavy_minus_sign:                         | Search by character name.                  | spider-man                                 |
| `sort`                                     | *string*                                   | :heavy_minus_sign:                         | Sort field (name, created_at, updated_at). | name                                       |
| `direction`                                | *string*                                   | :heavy_minus_sign:                         | Sort direction (asc, desc).                | asc                                        |
| `limit`                                    | *number*                                   | :heavy_minus_sign:                         | Results per page (max 50).                 | 20                                         |