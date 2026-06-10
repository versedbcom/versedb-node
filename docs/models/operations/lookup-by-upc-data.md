# LookupByUPCData

## Example Usage

```typescript
import { LookupByUPCData } from "@versedbcom/sdk/models/operations";

let value: LookupByUPCData = {
  id: 5432,
  slug: "amazing-spider-man-1",
  seriesId: 123,
  titleId: 45,
  issueNumber: "1",
  name: "The Amazing Spider-Man #1",
  description: "Nick Spencer and Ryan Ottley begin a new era...",
  releaseDate: "2018-07-11",
  coverDate: "2018-09-01",
  coverUrl: "https://...",
  upc: "75960608936700111",
  series: {
    id: 123,
    name: "Amazing Spider-Man",
    slug: "amazing-spider-man-2018",
    startYear: 2018,
    volumeNumber: 5,
  },
  publisher: {
    id: 1,
    name: "Marvel",
    slug: "marvel",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 5432                                                                                  |
| `slug`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | amazing-spider-man-1                                                                  |
| `seriesId`                                                                            | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 123                                                                                   |
| `titleId`                                                                             | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 45                                                                                    |
| `issueNumber`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `name`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | The Amazing Spider-Man #1                                                             |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | Nick Spencer and Ryan Ottley begin a new era...                                       |
| `releaseDate`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 2018-07-11                                                                            |
| `coverDate`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 2018-09-01                                                                            |
| `coverUrl`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | https://...                                                                           |
| `upc`                                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 75960608936700111                                                                     |
| `series`                                                                              | [operations.LookupByUPCSeries](../../models/operations/lookup-by-upc-series.md)       | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `publisher`                                                                           | [operations.LookupByUPCPublisher](../../models/operations/lookup-by-upc-publisher.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |