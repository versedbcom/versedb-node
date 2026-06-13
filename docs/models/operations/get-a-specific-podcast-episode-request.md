# GetASpecificPodcastEpisodeRequest

## Example Usage

```typescript
import { GetASpecificPodcastEpisodeRequest } from "@versedbcom/sdk/models/operations";

let value: GetASpecificPodcastEpisodeRequest = {
  podcastId: 1,
  episodeId: 1,
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `podcastId`            | *number*               | :heavy_check_mark:     | The ID of the podcast. | 1                      |
| `episodeId`            | *number*               | :heavy_check_mark:     | The ID of the episode. | 1                      |