# ListAllTeamsWithOptionalSearchRequest

## Example Usage

```typescript
import { ListAllTeamsWithOptionalSearchRequest } from "@versedbcom/sdk/models/operations";

let value: ListAllTeamsWithOptionalSearchRequest = {
  q: "avengers",
  limit: 20,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `q`                                  | *string*                             | :heavy_minus_sign:                   | Search by team name.                 | avengers                             |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of results per page (max 50). | 20                                   |