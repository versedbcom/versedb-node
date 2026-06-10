# SubmitAMarketSaleData

## Example Usage

```typescript
import { SubmitAMarketSaleData } from "@versedbcom/sdk/models/operations";

let value: SubmitAMarketSaleData = {
  id: 901,
  status: "pending",
  issueId: 5432,
  provider: "ebay",
  priceDisplay: "$49.99",
  gradeDisplay: "CGC 9.8",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_minus_sign: | N/A                | 901                |
| `status`           | *string*           | :heavy_minus_sign: | N/A                | pending            |
| `issueId`          | *number*           | :heavy_minus_sign: | N/A                | 5432               |
| `provider`         | *string*           | :heavy_minus_sign: | N/A                | ebay               |
| `priceDisplay`     | *string*           | :heavy_minus_sign: | N/A                | $49.99             |
| `gradeDisplay`     | *string*           | :heavy_minus_sign: | N/A                | CGC 9.8            |