# LookupByDistributorCodeResponseBody

Success

## Example Usage

```typescript
import { LookupByDistributorCodeResponseBody } from "@versedbcom/sdk/models/operations";

let value: LookupByDistributorCodeResponseBody = {
  data: {
    id: 5432,
    slug: "absolute-batman-15",
    seriesId: 123,
    titleId: 45,
    issueNumber: "15",
    name: "Absolute Batman #15",
    solicitation: "The publisher's own solicitation text, verbatim, or null",
    releaseDate: "2026-01-28",
    coverUrl: "https://...",
    upc: "76194138441201511",
    lunarCode: "1125DC0151",
    universalCode: "DC10251016",
    diamondCode: null,
    series: {
      id: 123,
      name: "Absolute Batman",
      slug: "absolute-batman-2024",
      startYear: 2024,
      volumeNumber: 1,
    },
    publisher: {
      id: 2,
      name: "DC Comics",
      slug: "dc-comics",
    },
  },
  suggestedVariantId: 789,
  variants: [
    {
      variantId: null,
      variantName: "Cover A",
      coverUrl: "https://...",
      upc: "76194138441201511",
      lunarCode: "1125DC0151",
      universalCode: "DC10251016",
      diamondCode: null,
    },
    {
      variantId: "789",
      variantName: "Cover B",
      coverUrl: "https://...",
      upc: "76194138441201521",
      lunarCode: "1125DC0152",
      universalCode: "DC10251017",
      diamondCode: null,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                                                                                                                                                      | [operations.LookupByDistributorCodeData](../../models/operations/lookup-by-distributor-code-data.md)                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                             |
| `suggestedVariantId`                                                                                                                                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                                                                         | 789                                                                                                                                                                                                                                                                                                                                                                                         |
| `variants`                                                                                                                                                                                                                                                                                                                                                                                  | [operations.LookupByDistributorCodeVariant](../../models/operations/lookup-by-distributor-code-variant.md)[]                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                                                                         | [<br/>{<br/>"variant_id": null,<br/>"variant_name": "Cover A",<br/>"cover_url": "https://...",<br/>"upc": "76194138441201511",<br/>"lunar_code": "1125DC0151",<br/>"universal_code": "DC10251016",<br/>"diamond_code": null<br/>},<br/>{<br/>"variant_id": 789,<br/>"variant_name": "Cover B",<br/>"cover_url": "https://...",<br/>"upc": "76194138441201521",<br/>"lunar_code": "1125DC0152",<br/>"universal_code": "DC10251017",<br/>"diamond_code": null<br/>}<br/>] |