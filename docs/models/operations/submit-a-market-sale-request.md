# SubmitAMarketSaleRequest

## Example Usage

```typescript
import { SubmitAMarketSaleRequest } from "@versedbcom/sdk/models/operations";

let value: SubmitAMarketSaleRequest = {
  issueId: 5432,
  body: {
    provider: "ebay",
    externalListingId: "256789012345",
    soldAt: "2026-05-01",
    price: 49.99,
    currency: "USD",
    gradeType: "cgc",
    gradeValue: 9.8,
    gradeLabel: "NM/M",
    sourceUrl: "https://www.ebay.com/itm/256789012345",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                               | *number*                                                                                                | :heavy_check_mark:                                                                                      | The issue ID.                                                                                           | 5432                                                                                                    |
| `body`                                                                                                  | [operations.SubmitAMarketSaleRequestBody](../../models/operations/submit-a-market-sale-request-body.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |