# ListCharactersResponse

## Example Usage

```typescript
import { ListCharactersResponse } from "@versedbcom/sdk/models/operations";

let value: ListCharactersResponse = {
  headers: {},
  result: {
    data: [
      {
        id: 456,
        name: "Spider-Man (Peter Parker)",
        slug: "spider-man-peter-parker",
        realName: "Peter Parker",
        aliases: [
          "Spidey",
          "Web-Head",
        ],
        race: "Human",
        imageUrl: "https://...-full_lg.webp",
        images: {
          tileSm: "https://...-tile_sm.webp",
          profileMd: "https://...-profile_md.webp",
          fullLg: "https://...-full_lg.webp",
        },
        appearancesCount: 5400,
        publisherName: "Marvel Comics",
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
        realNameI18n: {
          "ja": {
            value: "講談社",
            source: "madb",
            reading: "こうだんしゃ",
          },
        },
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
      links: [],
      path: "/var/tmp",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [operations.ListCharactersResponseBody](../../models/operations/list-characters-response-body.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |