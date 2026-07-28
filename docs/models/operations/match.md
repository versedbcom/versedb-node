# Match

## Example Usage

```typescript
import { Match } from "@versedbcom/sdk/models/operations";

let value: Match = {
  issueId: 5432,
  seriesName: "Amazing Spider-Man",
  seriesId: 123,
  issueNumber: "1",
  coverUrl: "https://...",
  variantName: null,
  suggestedVariantId: null,
  variants: [
    {
      variantId: null,
      variantName: "Cover A",
      coverUrl: "https://...",
    },
  ],
  publisherName: "Marvel",
  releaseDate: "1990-04-01",
  startYear: 1963,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `issueId`                                                                         | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 5432                                                                              |
| `seriesName`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | Amazing Spider-Man                                                                |
| `seriesId`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 123                                                                               |
| `issueNumber`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 1                                                                                 |
| `coverUrl`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | https://...                                                                       |
| `variantName`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | null                                                                              |
| `suggestedVariantId`                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | null                                                                              |
| `variants`                                                                        | [operations.MatchVariant](../../models/operations/match-variant.md)[]             | :heavy_minus_sign:                                                                | N/A                                                                               | [<br/>{<br/>"variant_id": null,<br/>"variant_name": "Cover A",<br/>"cover_url": "https://..."<br/>}<br/>] |
| `publisherName`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | Marvel                                                                            |
| `releaseDate`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 1990-04-01                                                                        |
| `startYear`                                                                       | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 1963                                                                              |