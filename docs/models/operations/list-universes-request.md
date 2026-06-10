# ListUniversesRequest

## Example Usage

```typescript
import { ListUniversesRequest } from "@versedbcom/sdk/models/operations";

let value: ListUniversesRequest = {
  q: "marvel",
  limit: 20,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `q`                                  | *string*                             | :heavy_minus_sign:                   | Search by universe name.             | marvel                               |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of results per page (max 50). | 20                                   |