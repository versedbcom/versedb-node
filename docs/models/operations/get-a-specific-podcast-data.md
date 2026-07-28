# GetASpecificPodcastData

## Example Usage

```typescript
import { GetASpecificPodcastData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastData = {
  id: 56,
  name: "War Rocket Ajax",
  slug: "war-rocket-ajax",
  type: "podcast",
  description:
    "A weekly comic book podcast covering new releases, industry news, and creator interviews.",
  language: "en",
  logoUrl: "https://r2.versedb.com/uploads/podcasts/wra-56/wra-56-full_lg.webp",
  images: {
    tileSm:
      "https://r2.versedb.com/uploads/podcasts/wra-56/wra-56-tile_sm.webp",
    fullLg:
      "https://r2.versedb.com/uploads/podcasts/wra-56/wra-56-full_lg.webp",
  },
  websiteUrl: "https://warrocketajax.com",
  rssFeedUrl: "https://feeds.example.com/war-rocket-ajax",
  youtubeChannelId: null,
  socialLinks: {
    website: "https://warrocketajax.com",
    twitter: "https://twitter.com/warrocketajax",
  },
  platformLinks: {
    apple: "https://podcasts.apple.com/us/podcast/id123456",
    spotify: "https://open.spotify.com/show/abc123",
  },
  followerCount: 1240,
  subscriberCount: 8800,
  categories: [
    "Comics",
    "Pop Culture",
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 56                                                                                               |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | War Rocket Ajax                                                                                  |
| `slug`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | war-rocket-ajax                                                                                  |
| `type`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | podcast                                                                                          |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | A weekly comic book podcast covering new releases, industry news, and creator interviews.        |
| `language`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | en                                                                                               |
| `logoUrl`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | https://r2.versedb.com/uploads/podcasts/wra-56/wra-56-full_lg.webp                               |
| `images`                                                                                         | [operations.GetASpecificPodcastImages](../../models/operations/get-a-specific-podcast-images.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `websiteUrl`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | https://warrocketajax.com                                                                        |
| `rssFeedUrl`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | https://feeds.example.com/war-rocket-ajax                                                        |
| `youtubeChannelId`                                                                               | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | null                                                                                             |
| `socialLinks`                                                                                    | [operations.SocialLinks](../../models/operations/social-links.md)                                | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `platformLinks`                                                                                  | [operations.PlatformLinks](../../models/operations/platform-links.md)                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `followerCount`                                                                                  | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 1240                                                                                             |
| `subscriberCount`                                                                                | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 8800                                                                                             |
| `categories`                                                                                     | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              | [<br/>"Comics",<br/>"Pop Culture"<br/>]                                                          |