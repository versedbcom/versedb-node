# GetPublisherDetailsResponseBody

Success

## Example Usage

```typescript
import { GetPublisherDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetPublisherDetailsResponseBody = {
  data: {
    id: 1,
    name: "Marvel Comics",
    description:
      "American comic book publisher, home to Spider-Man, the X-Men, and the Avengers.",
    foundedYear: 1939,
    website: "https://www.marvel.com",
    headquarters: "New York, NY",
    parentCompany: "The Walt Disney Company",
    status: "active",
    logoUrl:
      "https://r2.versedb.com/uploads/publishers/marvel-1/marvel-1-full_lg.webp",
    images: {
      tileSm:
        "https://r2.versedb.com/uploads/publishers/marvel-1/marvel-1-tile_sm.webp",
      profileMd:
        "https://r2.versedb.com/uploads/publishers/marvel-1/marvel-1-profile_md.webp",
      fullLg:
        "https://r2.versedb.com/uploads/publishers/marvel-1/marvel-1-full_lg.webp",
    },
    firstPublishedYear: 1939,
    aliases: [
      "Marvel",
      "Timely Comics",
      "Atlas Comics",
    ],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetPublisherDetailsData](../../models/operations/get-publisher-details-data.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |