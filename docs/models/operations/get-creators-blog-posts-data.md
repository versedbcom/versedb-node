# GetCreatorsBlogPostsData

## Example Usage

```typescript
import { GetCreatorsBlogPostsData } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsBlogPostsData = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 12                                                                                                 |
| `slug`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | spotlight-alan-moore                                                                               |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | Creator Spotlight: Alan Moore                                                                      |
| `featuredImageUrl`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | https://...-cover_sm.webp                                                                          |
| `images`                                                                                           | [operations.GetCreatorsBlogPostsImages](../../models/operations/get-creators-blog-posts-images.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `category`                                                                                         | [operations.Category](../../models/operations/category.md)                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `author`                                                                                           | [operations.Author](../../models/operations/author.md)                                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `publishedAt`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 2026-04-15T12:00:00+00:00                                                                          |
| `readingTime`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 6                                                                                                  |