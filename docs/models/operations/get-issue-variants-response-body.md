# GetIssueVariantsResponseBody

Success

## Example Usage

```typescript
import { GetIssueVariantsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssueVariantsResponseBody = {
  data: [
    {
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
      isNsfw: false,
      creators: [
        {
          id: 81,
          name: "Fiona Staples",
          role: "Cover Artist",
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
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.GetIssueVariantsData](../../models/operations/get-issue-variants-data.md)[] | :heavy_check_mark:                                                                      | N/A                                                                                     |