# ListCreatorsRequest

## Example Usage

```typescript
import { ListCreatorsRequest } from "@versedbcom/sdk/models/operations";

let value: ListCreatorsRequest = {
  q: "alan moore",
  limit: 20,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `q`                        | *string*                   | :heavy_minus_sign:         | Search by creator name.    | alan moore                 |
| `limit`                    | *number*                   | :heavy_minus_sign:         | Results per page (max 50). | 20                         |