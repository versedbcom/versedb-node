# GetCharacterTeamsResponse

## Example Usage

```typescript
import { GetCharacterTeamsResponse } from "@versedbcom/sdk/models/operations";

let value: GetCharacterTeamsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [
      {
        id: 12,
        name: "Avengers",
        slug: "avengers",
        aliases: [
          "Earth's Mightiest Heroes",
        ],
        headquarters: "Avengers Tower, New York City",
        membersCount: 42,
        appearancesCount: 1250,
        imageUrl: "https://...-tile_sm.webp",
        images: {
          tileSm: "https://...-tile_sm.webp",
          profileMd: "https://...-profile_md.webp",
          fullLg: "https://...-full_lg.webp",
        },
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
    ],
    links: {
      first: "<value>",
      last: "<value>",
      prev: "<value>",
      next: null,
    },
    meta: {
      currentPage: 1,
      from: 1,
      lastPage: 25,
      links: [],
      path: "/proc",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.GetCharacterTeamsResponseBody](../../models/operations/get-character-teams-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |