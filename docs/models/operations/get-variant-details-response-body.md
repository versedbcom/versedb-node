# GetVariantDetailsResponseBody

Success

## Example Usage

```typescript
import { GetVariantDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetVariantDetailsResponseBody = {
  data: {
    id: 901,
    issueId: 5432,
    variantName: "Cover B",
    coverUrl: "https://...-cover_lg.webp",
    images: {
      thumb: "https://...-thumb.webp",
      coverSm: "https://...-cover_sm.webp",
      coverMd: "https://...-cover_md.webp",
      coverLg: "https://...-cover_lg.webp",
    },
    variantType: "standard",
    ratio: "1:25",
    price: "4.99",
    currencyCode: "USD",
    formattedPrice: "$4.99",
    ean: "75960609999300111",
    releaseDate: "2025-04-09",
    creators: [
      {
        id: 101,
        name: "J. Scott Campbell",
        slug: "j-scott-campbell",
        photoUrl: "https://...-profile_md.webp",
        role: "Cover Artist",
        isUncredited: true,
      },
    ],
    variantNameI18n: {
      "ja": {
        value: "講談社",
        source: "madb",
        reading: "こうだんしゃ",
      },
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.GetVariantDetailsData](../../models/operations/get-variant-details-data.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |