# ListCharactersRequest

## Example Usage

```typescript
import { ListCharactersRequest } from "@versedbcom/sdk/models/operations";

let value: ListCharactersRequest = {
  q: "spider-man",
  limit: 20,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `q`                        | *string*                   | :heavy_minus_sign:         | Search by character name.  | spider-man                 |
| `limit`                    | *number*                   | :heavy_minus_sign:         | Results per page (max 50). | 20                         |