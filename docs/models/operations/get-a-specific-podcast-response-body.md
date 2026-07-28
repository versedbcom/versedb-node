# GetASpecificPodcastResponseBody

Success

## Example Usage

```typescript
import { GetASpecificPodcastResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastResponseBody = {
  data: {
    id: 56,
    name: "War Rocket Ajax",
    slug: "war-rocket-ajax",
    type: "podcast",
    description:
      "A weekly comic book podcast covering new releases, industry news, and creator interviews.",
    language: "en",
    logoUrl:
      "https://r2.versedb.com/uploads/podcasts/wra-56/wra-56-full_lg.webp",
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.GetASpecificPodcastData](../../models/operations/get-a-specific-podcast-data.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |