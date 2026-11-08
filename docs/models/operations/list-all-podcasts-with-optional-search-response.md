# ListAllPodcastsWithOptionalSearchResponse

## Example Usage

```typescript
import { ListAllPodcastsWithOptionalSearchResponse } from "@versedbcom/sdk/models/operations";

let value: ListAllPodcastsWithOptionalSearchResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    data: [],
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
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                   | Record<string, *string*[]>                                                                                                                  | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `result`                                                                                                                                    | [operations.ListAllPodcastsWithOptionalSearchResponseBody](../../models/operations/list-all-podcasts-with-optional-search-response-body.md) | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |