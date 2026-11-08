# GetStoryArcsForASpecificUniverseResponseBody

Success

## Example Usage

```typescript
import { GetStoryArcsForASpecificUniverseResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificUniverseResponseBody = {
  data: [
    {
      id: 24,
      name: "The Night Gwen Stacy Died",
      slug: "the-night-gwen-stacy-died",
      type: "main_story",
      status: "ended",
      imageUrl: "https://...-cover_md.webp",
      images: {
        coverSm: "https://...-cover_sm.webp",
        coverMd: "https://...-cover_md.webp",
        coverLg: "https://...-cover_lg.webp",
      },
      issuesCount: 2,
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
        url: "https://whirlwind-tapioca.info",
        label: "<value>",
        active: true,
      },
    ],
    path: "/opt/include",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                      | [operations.GetStoryArcsForASpecificUniverseData](../../models/operations/get-story-arcs-for-a-specific-universe-data.md)[] | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `links`                                                                                                                     | [operations.GetStoryArcsForASpecificUniverseLinks](../../models/operations/get-story-arcs-for-a-specific-universe-links.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `meta`                                                                                                                      | [operations.GetStoryArcsForASpecificUniverseMeta](../../models/operations/get-story-arcs-for-a-specific-universe-meta.md)   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |