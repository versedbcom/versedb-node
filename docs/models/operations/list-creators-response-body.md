# ListCreatorsResponseBody

Success

## Example Usage

```typescript
import { ListCreatorsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListCreatorsResponseBody = {
  data: [
    {
      id: 789,
      name: "Alan Moore",
      slug: "alan-moore",
      role: {
        id: 1,
        name: "Writer",
      },
      roles: [],
      photoUrl: "https://...-full_lg.webp",
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
    links: [],
    path: "/Network",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.ListCreatorsData](../../models/operations/list-creators-data.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `links`                                                                        | [operations.ListCreatorsLinks](../../models/operations/list-creators-links.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `meta`                                                                         | [operations.ListCreatorsMeta](../../models/operations/list-creators-meta.md)   | :heavy_check_mark:                                                             | N/A                                                                            |