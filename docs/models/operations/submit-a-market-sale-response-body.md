# SubmitAMarketSaleResponseBody

Created

## Example Usage

```typescript
import { SubmitAMarketSaleResponseBody } from "@versedbcom/sdk/models/operations";

let value: SubmitAMarketSaleResponseBody = {
  message: "Sale submitted successfully and is pending review",
  data: {
    id: 901,
    status: "pending",
    issueId: 5432,
    provider: "ebay",
    priceDisplay: "$49.99",
    gradeDisplay: "CGC 9.8",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `message`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | Sale submitted successfully and is pending review                                        |
| `data`                                                                                   | [operations.SubmitAMarketSaleData](../../models/operations/submit-a-market-sale-data.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |