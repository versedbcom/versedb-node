# GetIssueDetailsAvailability

## Example Usage

```typescript
import { GetIssueDetailsAvailability } from "@versedbcom/sdk/models/operations";

let value: GetIssueDetailsAvailability = {
  id: 10,
  provider: "midtown_comics",
  providerLabel: "Midtown Comics",
  kind: "buy",
  storeName: "Midtown Comics",
  customName: "Signed edition",
  displayName: "Midtown Comics",
  storeLogo: "/images/brands/midtown.png",
  url: "https://www.midtowncomics.com/...",
  externalId: "12345",
  price: 19.99,
  formattedPrice: "$19.99",
  currency: "USD",
  isDigital: false,
  isAffiliate: false,
  isSynthesized: false,
  verifiedAt: "2026-01-01T00:00:00+00:00",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *number*                          | :heavy_check_mark:                | N/A                               | 10                                |
| `provider`                        | *string*                          | :heavy_check_mark:                | N/A                               | midtown_comics                    |
| `providerLabel`                   | *string*                          | :heavy_check_mark:                | N/A                               | Midtown Comics                    |
| `kind`                            | *string*                          | :heavy_check_mark:                | buy, read or watch.               | buy                               |
| `storeName`                       | *string*                          | :heavy_check_mark:                | N/A                               | Midtown Comics                    |
| `customName`                      | *string*                          | :heavy_check_mark:                | N/A                               | Signed edition                    |
| `displayName`                     | *string*                          | :heavy_check_mark:                | N/A                               | Midtown Comics                    |
| `storeLogo`                       | *string*                          | :heavy_check_mark:                | N/A                               | /images/brands/midtown.png        |
| `url`                             | *string*                          | :heavy_check_mark:                | N/A                               | https://www.midtowncomics.com/... |
| `externalId`                      | *string*                          | :heavy_check_mark:                | N/A                               | 12345                             |
| `price`                           | *number*                          | :heavy_check_mark:                | N/A                               | 19.99                             |
| `formattedPrice`                  | *string*                          | :heavy_check_mark:                | N/A                               | $19.99                            |
| `currency`                        | *string*                          | :heavy_check_mark:                | N/A                               | USD                               |
| `isDigital`                       | *boolean*                         | :heavy_check_mark:                | N/A                               |                                   |
| `isAffiliate`                     | *boolean*                         | :heavy_check_mark:                | N/A                               |                                   |
| `isSynthesized`                   | *boolean*                         | :heavy_check_mark:                | N/A                               |                                   |
| `verifiedAt`                      | *string*                          | :heavy_check_mark:                | N/A                               | 2026-01-01T00:00:00+00:00         |