# ListAllStoryArcsWithOptionalSearchResponse

## Example Usage

```typescript
import { ListAllStoryArcsWithOptionalSearchResponse } from "@versedbcom/sdk/models/operations";

let value: ListAllStoryArcsWithOptionalSearchResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
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
        primaryUniverse: {
          id: 1,
          name: "Earth-616",
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
          url: "https://cautious-freight.info",
          label: "<value>",
          active: false,
        },
      ],
      path: "/sbin",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                      | Record<string, *string*[]>                                                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `result`                                                                                                                                       | [operations.ListAllStoryArcsWithOptionalSearchResponseBody](../../models/operations/list-all-story-arcs-with-optional-search-response-body.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |