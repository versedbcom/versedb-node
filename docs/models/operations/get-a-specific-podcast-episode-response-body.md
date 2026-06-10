# GetASpecificPodcastEpisodeResponseBody

Success

## Example Usage

```typescript
import { GetASpecificPodcastEpisodeResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastEpisodeResponseBody = {
  data: {
    id: 1234,
    podcastId: 56,
    title: "Episode 312: The Death of Gwen Stacy Retrospective",
    description:
      "We revisit Amazing Spider-Man #121-122 and the story's lasting impact on comics.",
    audioUrl: "https://media.example.com/episodes/episode-312.mp3",
    videoUrl: null,
    isVideo: false,
    artworkUrl: "https://images.versedb.com/podcasts/56/episodes/1234.jpg",
    pubDate: "2026-05-28T12:00:00+00:00",
    duration: 4215,
    durationFormatted: "1:10:15",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                      | [operations.GetASpecificPodcastEpisodeData](../../models/operations/get-a-specific-podcast-episode-data.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |