# StoryArcs

## Overview


Endpoints for browsing story arcs and crossover events.

### Available Operations

* [listAllStoryArcsWithOptionalSearch](#listallstoryarcswithoptionalsearch) - List all story arcs with optional search
* [getStoryArcDetail](#getstoryarcdetail) - Get story arc detail.
* [getStoryArcsForASpecificIssue](#getstoryarcsforaspecificissue) - Get story arcs for a specific issue
* [getStoryArcsForASpecificCharacter](#getstoryarcsforaspecificcharacter) - Get story arcs for a specific character
* [getStoryArcsForASpecificUniverse](#getstoryarcsforaspecificuniverse) - Get story arcs for a specific universe

## listAllStoryArcsWithOptionalSearch

List all story arcs with optional search

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAllStoryArcsWithOptionalSearch" method="get" path="/api/v1/story-arcs" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.storyArcs.listAllStoryArcsWithOptionalSearch({
    q: "civil war",
    status: "ended",
    type: "crossover_event",
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
import { storyArcsListAllStoryArcsWithOptionalSearch } from "@versedbcom/sdk/funcs/story-arcs-list-all-story-arcs-with-optional-search.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await storyArcsListAllStoryArcsWithOptionalSearch(verseDB, {
    q: "civil war",
    status: "ended",
    type: "crossover_event",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storyArcsListAllStoryArcsWithOptionalSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllStoryArcsWithOptionalSearchRequest](../../models/operations/list-all-story-arcs-with-optional-search-request.md)                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllStoryArcsWithOptionalSearchResponse](../../models/operations/list-all-story-arcs-with-optional-search-response.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ListAllStoryArcsWithOptionalSearchUnauthorizedError    | 401                                                           | application/json                                              |
| errors.ListAllStoryArcsWithOptionalSearchTooManyRequestsError | 429                                                           | application/json                                              |
| errors.VerseDbDefaultError                                    | 4XX, 5XX                                                      | \*/\*                                                         |

## getStoryArcDetail

Returns full story arc detail with the primary and secondary universes,
a denormalized characters count, the start/end issue summaries (each
with its parent series), and the last user who edited the arc.

Paginated relationship data lives on dedicated nested endpoints:
- GET /story-arcs/{id}/issues - Issues in the arc, in reading order
- GET /story-arcs/{id}/series - Series spanned by the arc
- GET /story-arcs/{id}/characters - Characters appearing in the arc

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStoryArcDetail" method="get" path="/api/v1/story-arcs/{storyArc_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.storyArcs.getStoryArcDetail({
    storyArcId: 16,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { storyArcsGetStoryArcDetail } from "@versedbcom/sdk/funcs/story-arcs-get-story-arc-detail.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await storyArcsGetStoryArcDetail(verseDB, {
    storyArcId: 16,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storyArcsGetStoryArcDetail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStoryArcDetailRequest](../../models/operations/get-story-arc-detail-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStoryArcDetailResponse](../../models/operations/get-story-arc-detail-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetStoryArcDetailUnauthorizedError    | 401                                          | application/json                             |
| errors.GetStoryArcDetailTooManyRequestsError | 429                                          | application/json                             |
| errors.VerseDbDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |

## getStoryArcsForASpecificIssue

Requires PRO subscription on the User API (`/api/...`). Returns 402 Payment Required for non-PRO users on that prefix.
The Mobile API (`/mobile/api/...`) is unrestricted — its route group does not apply the `pro.api` middleware.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStoryArcsForASpecificIssue" method="get" path="/api/v1/issues/{issue_id}/story-arcs" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.storyArcs.getStoryArcsForASpecificIssue({
    issueId: 3,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { storyArcsGetStoryArcsForASpecificIssue } from "@versedbcom/sdk/funcs/story-arcs-get-story-arcs-for-a-specific-issue.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await storyArcsGetStoryArcsForASpecificIssue(verseDB, {
    issueId: 3,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storyArcsGetStoryArcsForASpecificIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStoryArcsForASpecificIssueRequest](../../models/operations/get-story-arcs-for-a-specific-issue-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStoryArcsForASpecificIssueResponse](../../models/operations/get-story-arcs-for-a-specific-issue-response.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.GetStoryArcsForASpecificIssueUnauthorizedError    | 401                                                      | application/json                                         |
| errors.GetStoryArcsForASpecificIssuePaymentRequiredError | 402                                                      | application/json                                         |
| errors.GetStoryArcsForASpecificIssueTooManyRequestsError | 429                                                      | application/json                                         |
| errors.VerseDbDefaultError                               | 4XX, 5XX                                                 | \*/\*                                                    |

## getStoryArcsForASpecificCharacter

Requires PRO subscription on the User API (`/api/...`). Returns 402 Payment Required for non-PRO users on that prefix.
The Mobile API (`/mobile/api/...`) is unrestricted — its route group does not apply the `pro.api` middleware.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStoryArcsForASpecificCharacter" method="get" path="/api/v1/characters/{character_id}/story-arcs" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.storyArcs.getStoryArcsForASpecificCharacter({
    characterId: 16,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { storyArcsGetStoryArcsForASpecificCharacter } from "@versedbcom/sdk/funcs/story-arcs-get-story-arcs-for-a-specific-character.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await storyArcsGetStoryArcsForASpecificCharacter(verseDB, {
    characterId: 16,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storyArcsGetStoryArcsForASpecificCharacter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStoryArcsForASpecificCharacterRequest](../../models/operations/get-story-arcs-for-a-specific-character-request.md)                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStoryArcsForASpecificCharacterResponse](../../models/operations/get-story-arcs-for-a-specific-character-response.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.GetStoryArcsForASpecificCharacterUnauthorizedError    | 401                                                          | application/json                                             |
| errors.GetStoryArcsForASpecificCharacterPaymentRequiredError | 402                                                          | application/json                                             |
| errors.GetStoryArcsForASpecificCharacterTooManyRequestsError | 429                                                          | application/json                                             |
| errors.VerseDbDefaultError                                   | 4XX, 5XX                                                     | \*/\*                                                        |

## getStoryArcsForASpecificUniverse

Requires PRO subscription on the User API (`/api/...`). Returns 402 Payment Required for non-PRO users on that prefix.
The Mobile API (`/mobile/api/...`) is unrestricted — its route group does not apply the `pro.api` middleware.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStoryArcsForASpecificUniverse" method="get" path="/api/v1/universes/{universe_id}/story-arcs" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.storyArcs.getStoryArcsForASpecificUniverse({
    universeId: 16,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { storyArcsGetStoryArcsForASpecificUniverse } from "@versedbcom/sdk/funcs/story-arcs-get-story-arcs-for-a-specific-universe.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await storyArcsGetStoryArcsForASpecificUniverse(verseDB, {
    universeId: 16,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storyArcsGetStoryArcsForASpecificUniverse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStoryArcsForASpecificUniverseRequest](../../models/operations/get-story-arcs-for-a-specific-universe-request.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStoryArcsForASpecificUniverseResponse](../../models/operations/get-story-arcs-for-a-specific-universe-response.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetStoryArcsForASpecificUniverseUnauthorizedError    | 401                                                         | application/json                                            |
| errors.GetStoryArcsForASpecificUniversePaymentRequiredError | 402                                                         | application/json                                            |
| errors.GetStoryArcsForASpecificUniverseTooManyRequestsError | 429                                                         | application/json                                            |
| errors.VerseDbDefaultError                                  | 4XX, 5XX                                                    | \*/\*                                                       |