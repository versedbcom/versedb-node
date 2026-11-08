# GetCreatorsBlogPostsResponseBody

Success

## Example Usage

```typescript
import { GetCreatorsBlogPostsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsBlogPostsResponseBody = {
  data: [
    {
      id: 12,
      slug: "spotlight-alan-moore",
      title: "Creator Spotlight: Alan Moore",
      featuredImageUrl: "https://...-cover_sm.webp",
      images: {
        coverSm: "https://...-cover_sm.webp",
        coverLg: "https://...-cover_lg.webp",
      },
      category: {
        id: 2,
        name: "Spotlights",
        slug: "spotlights",
      },
      author: {
        id: 1,
        name: "versedb",
      },
      publishedAt: "2026-04-15T12:00:00+00:00",
      readingTime: 6,
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
    path: "/proc",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.GetCreatorsBlogPostsData](../../models/operations/get-creators-blog-posts-data.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `links`                                                                                          | [operations.GetCreatorsBlogPostsLinks](../../models/operations/get-creators-blog-posts-links.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `meta`                                                                                           | [operations.GetCreatorsBlogPostsMeta](../../models/operations/get-creators-blog-posts-meta.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |