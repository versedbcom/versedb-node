# GetPublisherDetailsResponse

## Example Usage

```typescript
import { GetPublisherDetailsResponse } from "@versedbcom/sdk/models/operations";

let value: GetPublisherDetailsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.GetPublisherDetailsResponseBody](../../models/operations/get-publisher-details-response-body.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |