# Podcasts

## Overview


Endpoints for browsing comic book podcasts and episodes.

### Available Operations

* [listAllPodcastsWithOptionalSearch](#listallpodcastswithoptionalsearch) - List all podcasts with optional search
* [getASpecificPodcast](#getaspecificpodcast) - Get a specific podcast.
* [listEpisodesForASpecificPodcast](#listepisodesforaspecificpodcast) - List episodes for a specific podcast
* [getASpecificPodcastEpisode](#getaspecificpodcastepisode) - Get a specific podcast episode.

## listAllPodcastsWithOptionalSearch

List all podcasts with optional search

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAllPodcastsWithOptionalSearch" method="get" path="/api/v1/podcasts" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.podcasts.listAllPodcastsWithOptionalSearch({
    q: "comic",
    type: "youtube",
    language: "en",
    limit: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { podcastsListAllPodcastsWithOptionalSearch } from "@versedbcom/sdk/funcs/podcasts-list-all-podcasts-with-optional-search.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podcastsListAllPodcastsWithOptionalSearch(verseDB, {
    q: "comic",
    type: "youtube",
    language: "en",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("podcastsListAllPodcastsWithOptionalSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllPodcastsWithOptionalSearchRequest](../../models/operations/list-all-podcasts-with-optional-search-request.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllPodcastsWithOptionalSearchResponse](../../models/operations/list-all-podcasts-with-optional-search-response.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.ListAllPodcastsWithOptionalSearchUnauthorizedError    | 401                                                          | application/json                                             |
| errors.ListAllPodcastsWithOptionalSearchTooManyRequestsError | 429                                                          | application/json                                             |
| errors.VerseDbDefaultError                                   | 4XX, 5XX                                                     | \*/\*                                                        |

## getASpecificPodcast

Get a specific podcast.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getASpecificPodcast" method="get" path="/api/v1/podcasts/{podcast_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.podcasts.getASpecificPodcast({
    podcastId: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { podcastsGetASpecificPodcast } from "@versedbcom/sdk/funcs/podcasts-get-a-specific-podcast.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podcastsGetASpecificPodcast(verseDB, {
    podcastId: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("podcastsGetASpecificPodcast failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetASpecificPodcastRequest](../../models/operations/get-a-specific-podcast-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetASpecificPodcastResponse](../../models/operations/get-a-specific-podcast-response.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.GetASpecificPodcastUnauthorizedError    | 401                                            | application/json                               |
| errors.GetASpecificPodcastTooManyRequestsError | 429                                            | application/json                               |
| errors.VerseDbDefaultError                     | 4XX, 5XX                                       | \*/\*                                          |

## listEpisodesForASpecificPodcast

List episodes for a specific podcast

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listEpisodesForASpecificPodcast" method="get" path="/api/v1/podcasts/{podcast_id}/episodes" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.podcasts.listEpisodesForASpecificPodcast({
    podcastId: 1,
    q: "batman",
    limit: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { podcastsListEpisodesForASpecificPodcast } from "@versedbcom/sdk/funcs/podcasts-list-episodes-for-a-specific-podcast.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podcastsListEpisodesForASpecificPodcast(verseDB, {
    podcastId: 1,
    q: "batman",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("podcastsListEpisodesForASpecificPodcast failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListEpisodesForASpecificPodcastRequest](../../models/operations/list-episodes-for-a-specific-podcast-request.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListEpisodesForASpecificPodcastResponse](../../models/operations/list-episodes-for-a-specific-podcast-response.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ListEpisodesForASpecificPodcastUnauthorizedError    | 401                                                        | application/json                                           |
| errors.ListEpisodesForASpecificPodcastTooManyRequestsError | 429                                                        | application/json                                           |
| errors.VerseDbDefaultError                                 | 4XX, 5XX                                                   | \*/\*                                                      |

## getASpecificPodcastEpisode

Get a specific podcast episode.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getASpecificPodcastEpisode" method="get" path="/api/v1/podcasts/{podcast_id}/episodes/{episode_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.podcasts.getASpecificPodcastEpisode({
    podcastId: 1,
    episodeId: 16,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { podcastsGetASpecificPodcastEpisode } from "@versedbcom/sdk/funcs/podcasts-get-a-specific-podcast-episode.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podcastsGetASpecificPodcastEpisode(verseDB, {
    podcastId: 1,
    episodeId: 16,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("podcastsGetASpecificPodcastEpisode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetASpecificPodcastEpisodeRequest](../../models/operations/get-a-specific-podcast-episode-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetASpecificPodcastEpisodeResponse](../../models/operations/get-a-specific-podcast-episode-response.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.GetASpecificPodcastEpisodeUnauthorizedError    | 401                                                   | application/json                                      |
| errors.GetASpecificPodcastEpisodeTooManyRequestsError | 429                                                   | application/json                                      |
| errors.VerseDbDefaultError                            | 4XX, 5XX                                              | \*/\*                                                 |