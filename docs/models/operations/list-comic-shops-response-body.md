# ListComicShopsResponseBody

Success

## Example Usage

```typescript
import { ListComicShopsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListComicShopsResponseBody = {
  data: [
    {
      id: 42,
      name: "Midtown Comics",
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
      city: "New York",
      stateProvince: "NY",
      country: "United States",
      countryCode: "US",
      logoUrl: "https://...-tile_sm.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        fullLg: "https://...-full_lg.webp",
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
    links: [
      {
        url: "https://cooperative-wear.net",
        label: "<value>",
        active: true,
      },
    ],
    path: "/Users",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [operations.ListComicShopsData](../../models/operations/list-comic-shops-data.md)[] | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `links`                                                                             | [operations.ListComicShopsLinks](../../models/operations/list-comic-shops-links.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `meta`                                                                              | [operations.ListComicShopsMeta](../../models/operations/list-comic-shops-meta.md)   | :heavy_check_mark:                                                                  | N/A                                                                                 |