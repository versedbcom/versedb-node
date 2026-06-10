# LookupByUPCResponseBody

Success

## Example Usage

```typescript
import { LookupByUPCResponseBody } from "@versedbcom/sdk/models/operations";

let value: LookupByUPCResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [operations.LookupByUPCData](../../models/operations/lookup-by-upc-data.md) | :heavy_minus_sign:                                                          | N/A                                                                         |