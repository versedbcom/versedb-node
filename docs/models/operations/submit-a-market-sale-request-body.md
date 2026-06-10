# SubmitAMarketSaleRequestBody

## Example Usage

```typescript
import { SubmitAMarketSaleRequestBody } from "@versedbcom/sdk/models/operations";

let value: SubmitAMarketSaleRequestBody = {
  provider: "ebay",
  externalListingId: "256789012345",
  soldAt: "2026-05-01",
  price: 49.99,
  currency: "USD",
  gradeType: "cgc",
  gradeValue: 9.8,
  gradeLabel: "NM/M",
  sourceUrl: "https://www.ebay.com/itm/256789012345",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `provider`                            | *string*                              | :heavy_check_mark:                    | Marketplace the sale came from.       | ebay                                  |
| `externalListingId`                   | *string*                              | :heavy_check_mark:                    | Listing ID on the provider.           | 256789012345                          |
| `soldAt`                              | *string*                              | :heavy_check_mark:                    | Sale date (ISO 8601).                 | 2026-05-01                            |
| `price`                               | *number*                              | :heavy_check_mark:                    | Sale price.                           | 49.99                                 |
| `currency`                            | *string*                              | :heavy_check_mark:                    | 3-letter currency code.               | USD                                   |
| `gradeType`                           | *string*                              | :heavy_check_mark:                    | Grade type (raw, cgc, cbcs, pgx).     | cgc                                   |
| `gradeValue`                          | *number*                              | :heavy_minus_sign:                    | Numeric grade (0.5-10).               | 9.8                                   |
| `gradeLabel`                          | *string*                              | :heavy_minus_sign:                    | Free-form grade label.                | NM/M                                  |
| `sourceUrl`                           | *string*                              | :heavy_minus_sign:                    | Link to the listing.                  | https://www.ebay.com/itm/256789012345 |