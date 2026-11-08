# ListAllTeamsWithOptionalSearchResponse

## Example Usage

```typescript
import { ListAllTeamsWithOptionalSearchResponse } from "@versedbcom/sdk/models/operations";

let value: ListAllTeamsWithOptionalSearchResponse = {
  headers: {
    "key": [],
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
      next: "<value>",
    },
    meta: {
      currentPage: 1,
      from: 1,
      lastPage: 25,
      links: [
        {
          url: "https://pushy-mobility.net/",
          label: "<value>",
          active: false,
        },
      ],
      path: "/opt",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                             | Record<string, *string*[]>                                                                                                            | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `result`                                                                                                                              | [operations.ListAllTeamsWithOptionalSearchResponseBody](../../models/operations/list-all-teams-with-optional-search-response-body.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |