# LookupByDistributorCodeData

## Example Usage

```typescript
import { LookupByDistributorCodeData } from "@versedbcom/sdk/models/operations";

let value: LookupByDistributorCodeData = {
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
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 5432                                                                                                           |
| `slug`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | absolute-batman-15                                                                                             |
| `seriesId`                                                                                                     | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 123                                                                                                            |
| `titleId`                                                                                                      | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 45                                                                                                             |
| `issueNumber`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 15                                                                                                             |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | Absolute Batman #15                                                                                            |
| `solicitation`                                                                                                 | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | The publisher's own solicitation text, verbatim, or null                                                       |
| `releaseDate`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 2026-01-28                                                                                                     |
| `coverUrl`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | https://...                                                                                                    |
| `upc`                                                                                                          | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 76194138441201511                                                                                              |
| `lunarCode`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | 1125DC0151                                                                                                     |
| `universalCode`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | DC10251016                                                                                                     |
| `diamondCode`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | null                                                                                                           |
| `series`                                                                                                       | [operations.LookupByDistributorCodeSeries](../../models/operations/lookup-by-distributor-code-series.md)       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `publisher`                                                                                                    | [operations.LookupByDistributorCodePublisher](../../models/operations/lookup-by-distributor-code-publisher.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |