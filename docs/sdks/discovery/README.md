# Discovery

## Overview


Dynamic content discovery endpoints for the home screen and new releases.

These endpoints provide curated and time-sensitive content like upcoming releases,
FOC (Final Order Cutoff) deadlines, and new first issues.

### Available Operations

* [fOCDeadlines](#focdeadlines) - FOC deadlines.
* [upcoming1Issues](#upcoming1issues) - Upcoming #1 issues.
* [followUpdates](#followupdates) - Follow updates.

## fOCDeadlines

Returns issues with Final Order Cutoff (FOC) deadline within the next N days.
FOC is when retailers must place final orders with distributors (typically 2 weeks before release).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="fOCDeadlines" method="get" path="/api/v1/discovery/foc" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.discovery.fOCDeadlines({
    limit: 10,
    days: 7,
    startDate: "2026-03-15",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { discoveryFOCDeadlines } from "@versedbcom/sdk/funcs/discovery-foc-deadlines.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await discoveryFOCDeadlines(verseDB, {
    limit: 10,
    days: 7,
    startDate: "2026-03-15",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discoveryFOCDeadlines failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FOCDeadlinesRequest](../../models/operations/foc-deadlines-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FOCDeadlinesResponse](../../models/operations/foc-deadlines-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedError    | 401                         | application/json            |
| errors.TooManyRequestsError | 429                         | application/json            |
| errors.VerseDbDefaultError  | 4XX, 5XX                    | \*/\*                       |

## upcoming1Issues

Returns upcoming first issues (#1) from new ongoing series within the next N days.
Useful for discovering new series launches.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upcoming1Issues" method="get" path="/api/v1/discovery/upcoming-firsts" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.discovery.upcoming1Issues({
    limit: 10,
    days: 60,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { discoveryUpcoming1Issues } from "@versedbcom/sdk/funcs/discovery-upcoming1-issues.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await discoveryUpcoming1Issues(verseDB, {
    limit: 10,
    days: 60,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discoveryUpcoming1Issues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Upcoming1IssuesRequest](../../models/operations/upcoming1-issues-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.Upcoming1IssuesResponse](../../models/operations/upcoming1-issues-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedError    | 401                         | application/json            |
| errors.TooManyRequestsError | 429                         | application/json            |
| errors.VerseDbDefaultError  | 4XX, 5XX                    | \*/\*                       |

## followUpdates

Returns recent releases from titles, series, characters, and creators the user follows.
Each item includes a context string explaining why it's shown (e.g. "New in X-Men", "Featuring Superman").

### Example Usage

<!-- UsageSnippet language="typescript" operationID="followUpdates" method="get" path="/api/v1/discovery/follow-updates" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.discovery.followUpdates({
    limit: 20,
    days: 30,
    page: 1,
    perPage: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { discoveryFollowUpdates } from "@versedbcom/sdk/funcs/discovery-follow-updates.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await discoveryFollowUpdates(verseDB, {
    limit: 20,
    days: 30,
    page: 1,
    perPage: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discoveryFollowUpdates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FollowUpdatesRequest](../../models/operations/follow-updates-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FollowUpdatesResponse](../../models/operations/follow-updates-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedError    | 401                         | application/json            |
| errors.TooManyRequestsError | 429                         | application/json            |
| errors.VerseDbDefaultError  | 4XX, 5XX                    | \*/\*                       |