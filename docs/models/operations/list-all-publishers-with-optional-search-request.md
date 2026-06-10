# ListAllPublishersWithOptionalSearchRequest

## Example Usage

```typescript
import { ListAllPublishersWithOptionalSearchRequest } from "@versedbcom/sdk/models/operations";

let value: ListAllPublishersWithOptionalSearchRequest = {
  q: "marvel",
  limit: 20,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `q`                                  | *string*                             | :heavy_minus_sign:                   | Search by publisher name.            | marvel                               |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of results per page (max 50). | 20                                   |