# ListEpisodesForASpecificPodcastResponseBody

## Example Usage

```typescript
import { ListEpisodesForASpecificPodcastResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListEpisodesForASpecificPodcastResponseBody = {
  data: [],
  links: {
    first: "http://localhost:8000/api/v1/podcasts/1/episodes?page=1",
    last: "http://localhost:8000/api/v1/podcasts/1/episodes?page=1",
    prev: null,
    next: null,
  },
  meta: {
    currentPage: 1,
    from: null,
    lastPage: 1,
    links: [
      {
        url: null,
        label: "pagination.previous",
        page: null,
        active: false,
      },
      {
        url: "http://localhost:8000/api/v1/podcasts/1/episodes?page=1",
        label: "1",
        page: "1",
        active: true,
      },
      {
        url: null,
        label: "pagination.next",
        page: null,
        active: false,
      },
    ],
    path: "http://localhost:8000/api/v1/podcasts/1/episodes",
    perPage: 20,
    to: null,
    total: 0,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                   | *any*[]                                                                                                                  | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | []                                                                                                                       |
| `links`                                                                                                                  | [operations.ListEpisodesForASpecificPodcastLinks](../../models/operations/list-episodes-for-a-specific-podcast-links.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `meta`                                                                                                                   | [operations.ListEpisodesForASpecificPodcastMeta](../../models/operations/list-episodes-for-a-specific-podcast-meta.md)   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |