# GetPublisherDetailsResponseBody

Success

## Example Usage

```typescript
import { GetPublisherDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetPublisherDetailsResponseBody = {
  data: {
    id: 1,
    name: "Marvel Comics",
    foundedYear: 1939,
    website: "https://www.marvel.com",
    headquarters: "New York, NY",
    parentCompany: "The Walt Disney Company",
    status: "active",
    logoUrl: "https://...-full_lg.webp",
    images: {
      tileSm: "https://...-tile_sm.webp",
      profileMd: "https://...-profile_md.webp",
      fullLg: "https://...-full_lg.webp",
    },
    firstPublishedYear: 1939,
    aliases: [
      "Timely Comics",
    ],
    nameI18n: {
      "ja": {
        value: "講談社",
        source: "madb",
        reading: "こうだんしゃ",
      },
    },
    aliasesI18n: {
      "en": [
        "Kodansha Comics",
      ],
    },
    originalLocale: "en",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetPublisherDetailsData](../../models/operations/get-publisher-details-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |