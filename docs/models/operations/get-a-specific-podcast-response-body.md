# GetASpecificPodcastResponseBody

## Example Usage

```typescript
import { GetASpecificPodcastResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.GetASpecificPodcastData](../../models/operations/get-a-specific-podcast-data.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |