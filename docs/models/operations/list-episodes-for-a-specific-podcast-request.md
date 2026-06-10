# ListEpisodesForASpecificPodcastRequest

## Example Usage

```typescript
import { ListEpisodesForASpecificPodcastRequest } from "@versedbcom/sdk/models/operations";

let value: ListEpisodesForASpecificPodcastRequest = {
  podcastId: 1,
  q: "batman",
  limit: 20,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `podcastId`                          | *number*                             | :heavy_check_mark:                   | The ID of the podcast.               | 1                                    |
| `q`                                  | *string*                             | :heavy_minus_sign:                   | Search by episode title.             | batman                               |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of results per page (max 50). | 20                                   |