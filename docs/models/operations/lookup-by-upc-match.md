# LookupByUPCMatch

## Example Usage

```typescript
import { LookupByUPCMatch } from "@versedbcom/sdk/models/operations";

let value: LookupByUPCMatch = {
  issueId: 5432,
  seriesName: "Amazing Spider-Man",
  seriesId: 123,
  issueNumber: "1",
  coverUrl: "https://...",
  variantName: "<value>",
  suggestedVariantId: null,
  variants: [
    {
      variantId: 789,
      variantName: "Cover B",
      coverUrl: "https://...",
      upc: "75960608936700121",
      lunarCode: "0518MA0102",
      universalCode: "DC10251017",
      diamondCode: "MAY180902",
    },
  ],
  publisherName: "Marvel",
  releaseDate: "1990-04-01",
  startYear: 1963,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `issueId`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | 5432                                                                                           |
| `seriesName`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | Amazing Spider-Man                                                                             |
| `seriesId`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | 123                                                                                            |
| `issueNumber`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | 1                                                                                              |
| `coverUrl`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | https://...                                                                                    |
| `variantName`                                                                                  | *any*                                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `suggestedVariantId`                                                                           | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | null                                                                                           |
| `variants`                                                                                     | [operations.LookupByUPCMatchVariant](../../models/operations/lookup-by-upc-match-variant.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `publisherName`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | Marvel                                                                                         |
| `releaseDate`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | 1990-04-01                                                                                     |
| `startYear`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | 1963                                                                                           |