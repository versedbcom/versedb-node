# SubmitAMarketSaleResponse

## Example Usage

```typescript
import { SubmitAMarketSaleResponse } from "@versedbcom/sdk/models/operations";

let value: SubmitAMarketSaleResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    message: "Sale submitted successfully and is pending review",
    data: {
      id: 901,
      status: "pending",
      issueId: 5432,
      provider: "ebay",
      priceDisplay: "$49.99",
      gradeDisplay: "CGC 9.8",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                       | Type                                                                                                                                                                                                        | Required                                                                                                                                                                                                    | Description                                                                                                                                                                                                 | Example                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                          | N/A                                                                                                                                                                                                         |                                                                                                                                                                                                             |
| `result`                                                                                                                                                                                                    | [operations.SubmitAMarketSaleResponseBody](../../models/operations/submit-a-market-sale-response-body.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                                          | N/A                                                                                                                                                                                                         | {<br/>"message": "Sale submitted successfully and is pending review",<br/>"data": {<br/>"id": 901,<br/>"status": "pending",<br/>"issue_id": 5432,<br/>"provider": "ebay",<br/>"price_display": "$49.99",<br/>"grade_display": "CGC 9.8"<br/>}<br/>} |