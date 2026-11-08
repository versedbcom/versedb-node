# PullSource

## Example Usage

```typescript
import { PullSource } from "@versedbcom/sdk/models/operations";

let value: PullSource = {
  id: 12,
  name: "Main Street Comics",
  kind: "shop",
  kindLabel: "Comic shop",
  hasPickup: true,
  comicShopId: 345,
  location: "Springfield, IL",
  pickupNote: "Ships Friday",
  isDefault: true,
  isLinked: true,
  shopLinkId: null,
  sort: 1,
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                | 12                                                                 |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Main Street Comics                                                 |
| `kind`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | shop                                                               |
| `kindLabel`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Comic shop                                                         |
| `hasPickup`                                                        | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `comicShopId`                                                      | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                | 345                                                                |
| `location`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Springfield, IL                                                    |
| `pickupNote`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Ships Friday                                                       |
| `isDefault`                                                        | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `isLinked`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | True when the source is a shop's own link to the member's account. |                                                                    |
| `shopLinkId`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                | null                                                               |
| `sort`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                | 1                                                                  |
| `createdAt`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | 2024-01-15T10:30:00.000000Z                                        |
| `updatedAt`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | 2024-01-15T10:30:00.000000Z                                        |