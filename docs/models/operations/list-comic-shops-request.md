# ListComicShopsRequest

## Example Usage

```typescript
import { ListComicShopsRequest } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsRequest = {
  latitude: 40.7128,
  longitude: -74.006,
  radius: 25,
  country: "US",
  state: "NY",
  service: "pull_list",
  q: "manhattan",
  limit: 20,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `latitude`                                                                 | *number*                                                                   | :heavy_minus_sign:                                                         | Filter by proximity — latitude of search centre.                           | 40.7128                                                                    |
| `longitude`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | Filter by proximity — longitude of search centre.                          | -74.006                                                                    |
| `radius`                                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Search radius in miles (default: 25, max varies by distance from your IP). | 25                                                                         |
| `country`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | Filter by country — accepts ISO alpha-2 code or canonical country name.    | US                                                                         |
| `state`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | Filter by state or province.                                               | NY                                                                         |
| `service`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | Filter by service type (e.g. pull_list, back_issues).                      | pull_list                                                                  |
| `q`                                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | Search by shop name or city.                                               | manhattan                                                                  |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Number of results per page (max 50).                                       | 20                                                                         |