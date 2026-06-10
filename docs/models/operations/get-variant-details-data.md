# GetVariantDetailsData

## Example Usage

```typescript
import { GetVariantDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetVariantDetailsData = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 9001                                                                                               |
| `issueId`                                                                                          | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 5432                                                                                               |
| `variantName`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | J. Scott Campbell Variant                                                                          |
| `variantType`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | incentive                                                                                          |
| `ratio`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 1:25                                                                                               |
| `coverUrl`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | https://...                                                                                        |
| `price`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 49.99                                                                                              |
| `ean`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 75960608936700121                                                                                  |
| `creators`                                                                                         | [operations.GetVariantDetailsCreator](../../models/operations/get-variant-details-creator.md)[]    | :heavy_minus_sign:                                                                                 | N/A                                                                                                | [<br/>{<br/>"id": 101,<br/>"name": "J. Scott Campbell",<br/>"slug": "j-scott-campbell",<br/>"role": "Cover Artist"<br/>}<br/>] |