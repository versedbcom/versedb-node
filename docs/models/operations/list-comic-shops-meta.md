# ListComicShopsMeta

## Example Usage

```typescript
import { ListComicShopsMeta } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsMeta = {
  currentPage: 1,
  lastPage: 8,
  perPage: 20,
  total: 150,
  ipLocation: {
    latitude: 40.71,
    longitude: -74.01,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `currentPage`                                                   | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 1                                                               |
| `lastPage`                                                      | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 8                                                               |
| `perPage`                                                       | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 20                                                              |
| `total`                                                         | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             | 150                                                             |
| `ipLocation`                                                    | [operations.IpLocation](../../models/operations/ip-location.md) | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |