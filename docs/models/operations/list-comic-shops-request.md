# ListComicShopsRequest

## Example Usage

```typescript
import { ListComicShopsRequest } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsRequest = {
  country: "US",
  state: "NY",
  q: "manhattan",
  limit: 20,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `country`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Filter by country. Accepts an ISO alpha-2 code or canonical country name. | US                                                                        |
| `state`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Filter by state or province.                                              | NY                                                                        |
| `q`                                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | Search by shop name or city.                                              | manhattan                                                                 |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | Number of results per page (max 50).                                      | 20                                                                        |