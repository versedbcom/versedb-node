# ListAllPodcastsWithOptionalSearchResponseBody

Success

## Example Usage

```typescript
import { ListAllPodcastsWithOptionalSearchResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListAllPodcastsWithOptionalSearchResponseBody = {
  data: [
    {
      id: 56,
      name: "War Rocket Ajax",
      slug: "war-rocket-ajax",
      type: "podcast",
      language: "en",
      logoUrl: "https://...-full_lg.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        fullLg: "https://...-full_lg.webp",
      },
      followerCount: 1240,
      subscriberCount: 8800,
      categories: [
        "Comics",
        "Pop Culture",
      ],
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
        url: "https://lumpy-deployment.info/",
        label: "<value>",
        active: false,
      },
    ],
    path: "/boot",
    perPage: 20,
    to: 20,
    total: 500,
  },
  languages: [
    "en",
    "es",
    "fr",
    "ja",
  ],
  categories: [
    "Comics",
    "Pop Culture",
    "Reviews",
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                       | [operations.ListAllPodcastsWithOptionalSearchData](../../models/operations/list-all-podcasts-with-optional-search-data.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `links`                                                                                                                      | [operations.ListAllPodcastsWithOptionalSearchLinks](../../models/operations/list-all-podcasts-with-optional-search-links.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `meta`                                                                                                                       | [operations.ListAllPodcastsWithOptionalSearchMeta](../../models/operations/list-all-podcasts-with-optional-search-meta.md)   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `languages`                                                                                                                  | *string*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | [<br/>"en",<br/>"es",<br/>"fr",<br/>"ja"<br/>]                                                                               |
| `categories`                                                                                                                 | *string*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | [<br/>"Comics",<br/>"Pop Culture",<br/>"Reviews"<br/>]                                                                       |