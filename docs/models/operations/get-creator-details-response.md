# GetCreatorDetailsResponse

## Example Usage

```typescript
import { GetCreatorDetailsResponse } from "@versedbcom/sdk/models/operations";

let value: GetCreatorDetailsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      id: 789,
      name: "Alan Moore",
      slug: "alan-moore",
      role: {
        id: 1,
        name: "Writer",
      },
      roles: [
        {
          id: 1,
          name: "Writer",
        },
      ],
      photoUrl: "https://...-full_lg.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        profileMd: "https://...-profile_md.webp",
        fullLg: "https://...-full_lg.webp",
      },
      gender: "male",
      birth: "1953-11-18",
      death: "2026-01-01",
      birthPlace: "Northampton, England",
      country: "United Kingdom",
      aliases: [
        "Curt Vile",
      ],
      links: [
        {
          url: "https://example.com",
          type: "website",
        },
      ],
      awards: [
        {
          name: "Eisner Award",
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
          year: 1988,
        },
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.GetCreatorDetailsResponseBody](../../models/operations/get-creator-details-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |