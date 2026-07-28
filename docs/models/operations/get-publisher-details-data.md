# GetPublisherDetailsData

## Example Usage

```typescript
import { GetPublisherDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetPublisherDetailsData = {
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 1                                                                                               |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | Marvel Comics                                                                                   |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | American comic book publisher, home to Spider-Man, the X-Men, and the Avengers.                 |
| `foundedYear`                                                                                   | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 1939                                                                                            |
| `website`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | https://www.marvel.com                                                                          |
| `headquarters`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | New York, NY                                                                                    |
| `parentCompany`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | The Walt Disney Company                                                                         |
| `status`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | active                                                                                          |
| `logoUrl`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | https://r2.versedb.com/uploads/publishers/marvel-1/marvel-1-full_lg.webp                        |
| `images`                                                                                        | [operations.GetPublisherDetailsImages](../../models/operations/get-publisher-details-images.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `firstPublishedYear`                                                                            | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 1939                                                                                            |
| `aliases`                                                                                       | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             | [<br/>"Marvel",<br/>"Timely Comics",<br/>"Atlas Comics"<br/>]                                   |