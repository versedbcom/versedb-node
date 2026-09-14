# ListComicShopsRequest

## Example Usage

```typescript
import { ListComicShopsRequest } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsRequest = {
  country: "US",
  state: "NY",
  city: "New York",
  q: "manhattan",
  limit: 20,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `country`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Filter by country. Accepts an ISO alpha-2 code or canonical country name. | US                                                                        |
| `state`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Filter by state or province.                                              | NY                                                                        |
| `city`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | Filter by city. Accepts the city name or its URL slug, case-insensitive.  | New York                                                                  |
| `q`                                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | Search by shop name or city.                                              | manhattan                                                                 |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | Number of results per page (max 50).                                      | 20                                                                        |