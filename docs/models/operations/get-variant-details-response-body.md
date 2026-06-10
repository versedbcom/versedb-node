# GetVariantDetailsResponseBody

Success

## Example Usage

```typescript
import { GetVariantDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetVariantDetailsResponseBody = {
  data: {
    id: 9001,
    issueId: 5432,
    variantName: "J. Scott Campbell Variant",
    variantType: "incentive",
    ratio: "1:25",
    coverUrl: "https://...",
    price: "49.99",
    ean: "75960608936700121",
    creators: [
      {
        id: 101,
        name: "J. Scott Campbell",
        slug: "j-scott-campbell",
        role: "Cover Artist",
      },
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.GetVariantDetailsData](../../models/operations/get-variant-details-data.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |