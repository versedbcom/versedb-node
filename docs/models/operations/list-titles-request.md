# ListTitlesRequest

## Example Usage

```typescript
import { ListTitlesRequest } from "@versedbcom/sdk/models/operations";

let value: ListTitlesRequest = {
  q: "spider-man",
  publisher: 1,
  limit: 20,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `q`                                  | *string*                             | :heavy_minus_sign:                   | Search by title name.                | spider-man                           |
| `publisher`                          | *number*                             | :heavy_minus_sign:                   | Filter by publisher ID.              | 1                                    |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of results per page (max 50). | 20                                   |