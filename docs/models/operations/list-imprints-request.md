# ListImprintsRequest

## Example Usage

```typescript
import { ListImprintsRequest } from "@versedbcom/sdk/models/operations";

let value: ListImprintsRequest = {
  q: "vertigo",
  publisherId: 2,
  limit: 20,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `q`                                  | *string*                             | :heavy_minus_sign:                   | Search by imprint name.              | vertigo                              |
| `publisherId`                        | *number*                             | :heavy_minus_sign:                   | Filter by publisher ID.              | 2                                    |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of results per page (max 50). | 20                                   |