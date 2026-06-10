# GetCharacterIssuesRequest

## Example Usage

```typescript
import { GetCharacterIssuesRequest } from "@versedbcom/sdk/models/operations";

let value: GetCharacterIssuesRequest = {
  characterId: 456,
  limit: 20,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `characterId`              | *number*                   | :heavy_check_mark:         | The character ID.          | 456                        |
| `limit`                    | *number*                   | :heavy_minus_sign:         | Results per page (max 50). | 20                         |