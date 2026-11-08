# GetASpecificPodcastData

## Example Usage

```typescript
import { GetASpecificPodcastData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastData = {
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
  websiteUrl: "https://warrocketajax.com",
  rssFeedUrl: "https://feeds.example.com/war-rocket-ajax",
  youtubeChannelId: "UC1234567890",
  socialLinks: {
    website: "https://warrocketajax.com",
  },
  platformLinks: {
    "spotify": "https://open.spotify.com/show/abc123",
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
| `id`                                                                                             | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 56                                                                                               |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | War Rocket Ajax                                                                                  |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | war-rocket-ajax                                                                                  |
| `type`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | podcast                                                                                          |
| `language`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | en                                                                                               |
| `logoUrl`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | https://...-full_lg.webp                                                                         |
| `images`                                                                                         | [operations.GetASpecificPodcastImages](../../models/operations/get-a-specific-podcast-images.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `websiteUrl`                                                                                     | *operations.WebsiteUrl*                                                                          | :heavy_check_mark:                                                                               | social_links.website as stored (a URL in production), or null; always printed.                   | https://warrocketajax.com                                                                        |
| `rssFeedUrl`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | https://feeds.example.com/war-rocket-ajax                                                        |
| `youtubeChannelId`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | UC1234567890                                                                                     |
| `socialLinks`                                                                                    | *operations.SocialLinksUnion*                                                                    | :heavy_check_mark:                                                                               | Links by name, or null; an empty map prints as `[]`.                                             | {<br/>"website": "https://warrocketajax.com"<br/>}                                               |
| `platformLinks`                                                                                  | *operations.PlatformLinksUnion*                                                                  | :heavy_check_mark:                                                                               | Links by name, or null; an empty map prints as `[]`.                                             | {<br/>"spotify": "https://open.spotify.com/show/abc123"<br/>}                                    |
| `followerCount`                                                                                  | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 1240                                                                                             |
| `subscriberCount`                                                                                | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 8800                                                                                             |
| `categories`                                                                                     | *string*[]                                                                                       | :heavy_check_mark:                                                                               | The category names.                                                                              | [<br/>"Comics",<br/>"Pop Culture"<br/>]                                                          |