# GetASpecificTeamResponse

## Example Usage

```typescript
import { GetASpecificTeamResponse } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTeamResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: 78,
      name: "Avengers",
      slug: "avengers",
      aliases: [
        "Earth's Mightiest Heroes",
      ],
      formationDate: "1963-09-01",
      disbandedDate: null,
      headquarters: "Avengers Tower, New York",
      membersCount: 312,
      seriesCount: 48,
      appearancesCount: 5200,
      listsCount: 86,
      imageUrl: "https://...-full_lg.webp",
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
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                               | Record<string, *string*[]>                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `result`                                                                                                | [operations.GetASpecificTeamResponseBody](../../models/operations/get-a-specific-team-response-body.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |