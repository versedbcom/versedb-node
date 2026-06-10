# GetASpecificPodcastData

## Example Usage

```typescript
import { GetASpecificPodcastData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastData = {
  id: 1,
  name: "Capes Coffee TT 6a1ede0212b9e",
  slug: "capes-coffee-tt-6a1ede0212b9e",
  type: "youtube",
  description: "desc",
  language: "en",
  logoUrl: null,
  images: null,
  websiteUrl: null,
  rssFeedUrl: null,
  youtubeChannelId: "UCabcdefghijklmnopqrstuv",
  socialLinks: null,
  platformLinks: {
    youtube: "https://youtube.com/@x",
  },
  followerCount: 0,
  subscriberCount: null,
  categories: [],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | 1                                                                     |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | Capes Coffee TT 6a1ede0212b9e                                         |
| `slug`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | capes-coffee-tt-6a1ede0212b9e                                         |
| `type`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | youtube                                                               |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | desc                                                                  |
| `language`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | en                                                                    |
| `logoUrl`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | null                                                                  |
| `images`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | null                                                                  |
| `websiteUrl`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | null                                                                  |
| `rssFeedUrl`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | null                                                                  |
| `youtubeChannelId`                                                    | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | UCabcdefghijklmnopqrstuv                                              |
| `socialLinks`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | null                                                                  |
| `platformLinks`                                                       | [operations.PlatformLinks](../../models/operations/platform-links.md) | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `followerCount`                                                       | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | 0                                                                     |
| `subscriberCount`                                                     | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | null                                                                  |
| `categories`                                                          | *any*[]                                                               | :heavy_minus_sign:                                                    | N/A                                                                   | []                                                                    |