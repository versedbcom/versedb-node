# GetASpecificPodcastEpisodeData

## Example Usage

```typescript
import { GetASpecificPodcastEpisodeData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastEpisodeData = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 1234                                                                             |
| `podcastId`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 56                                                                               |
| `title`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Episode 312: The Death of Gwen Stacy Retrospective                               |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | We revisit Amazing Spider-Man #121-122 and the story's lasting impact on comics. |
| `audioUrl`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | https://media.example.com/episodes/episode-312.mp3                               |
| `videoUrl`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | null                                                                             |
| `isVideo`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              | false                                                                            |
| `artworkUrl`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | https://images.versedb.com/podcasts/56/episodes/1234.jpg                         |
| `pubDate`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 2026-05-28T12:00:00+00:00                                                        |
| `duration`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 4215                                                                             |
| `durationFormatted`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 1:10:15                                                                          |