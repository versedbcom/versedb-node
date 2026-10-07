# ListAllPodcastsWithOptionalSearchRequest

## Example Usage

```typescript
import { ListAllPodcastsWithOptionalSearchRequest } from "@versedbcom/sdk/models/operations";

let value: ListAllPodcastsWithOptionalSearchRequest = {
  q: "comic",
  type: "youtube",
  language: "en",
  category: [
    "Reviews",
  ],
  sort: "latest_episodes",
  limit: 20,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `q`                                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Search by podcast name.                                                                                | comic                                                                                                  |
| `type`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Filter by type (podcast or youtube).                                                                   | youtube                                                                                                |
| `language`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Filter by language code (e.g., en, ja, fr).                                                            | en                                                                                                     |
| `category`                                                                                             | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | Filter by category name; a podcast matching any of them is returned.                                   | [<br/>"Reviews"<br/>]                                                                                  |
| `sort`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Order: name (default), latest_episodes, newest, popular (most followers) or updated (recently synced). | latest_episodes                                                                                        |
| `limit`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Number of results per page (max 50).                                                                   | 20                                                                                                     |