# GetASpecificPodcastResponse

## Example Usage

```typescript
import { GetASpecificPodcastResponse } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: {
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
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [operations.GetASpecificPodcastResponseBody](../../models/operations/get-a-specific-podcast-response-body.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |