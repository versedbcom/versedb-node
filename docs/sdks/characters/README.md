# Characters

## Overview


Endpoints for browsing and searching comic book characters.

Characters include heroes, villains, and supporting characters across all publishers.
PRO subscription required for relationship endpoints (story arcs, appearances, etc.).

### Available Operations

* [listCharacters](#listcharacters) - List characters.
* [getCharacterDetails](#getcharacterdetails) - Get character details.
* [getCharacterSeries](#getcharacterseries) - Get character series.
* [getCharacterIssues](#getcharacterissues) - Get character issues.
* [getCharacterTeams](#getcharacterteams) - Get character teams.

## listCharacters

Returns paginated characters with optional search and sorting.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCharacters" method="get" path="/api/v1/characters" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.characters.listCharacters({
    q: "spider-man",
    sort: "name",
    direction: "asc",
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
import { charactersListCharacters } from "@versedbcom/sdk/funcs/characters-list-characters.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await charactersListCharacters(verseDB, {
    q: "spider-man",
    sort: "name",
    direction: "asc",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("charactersListCharacters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCharactersRequest](../../models/operations/list-characters-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListCharactersResponse](../../models/operations/list-characters-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.ListCharactersUnauthorizedError    | 401                                       | application/json                          |
| errors.ListCharactersTooManyRequestsError | 429                                       | application/json                          |
| errors.VerseDbDefaultError                | 4XX, 5XX                                  | \*/\*                                     |

## getCharacterDetails

Returns a single character with full details including publishers and
cached relationship counts (appearances, series, teams, story arcs) so
clients can decide which related-entity tabs to expose.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCharacterDetails" method="get" path="/api/v1/characters/{character_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.characters.getCharacterDetails({
    characterId: 456,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { charactersGetCharacterDetails } from "@versedbcom/sdk/funcs/characters-get-character-details.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await charactersGetCharacterDetails(verseDB, {
    characterId: 456,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("charactersGetCharacterDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCharacterDetailsRequest](../../models/operations/get-character-details-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCharacterDetailsResponse](../../models/operations/get-character-details-response.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.GetCharacterDetailsUnauthorizedError    | 401                                            | application/json                               |
| errors.GetCharacterDetailsNotFoundError        | 404                                            | application/json                               |
| errors.GetCharacterDetailsTooManyRequestsError | 429                                            | application/json                               |
| errors.VerseDbDefaultError                     | 4XX, 5XX                                       | \*/\*                                          |

## getCharacterSeries

Returns paginated series where the character appears.

Requires PRO subscription on the User API (`/api/...`). Returns 402 Payment Required for non-PRO users on that prefix.
The Mobile API (`/mobile/api/...`) is unrestricted — its route group does not apply the `pro.api` middleware.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCharacterSeries" method="get" path="/api/v1/characters/{character_id}/series" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.characters.getCharacterSeries({
    characterId: 456,
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
import { charactersGetCharacterSeries } from "@versedbcom/sdk/funcs/characters-get-character-series.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await charactersGetCharacterSeries(verseDB, {
    characterId: 456,
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("charactersGetCharacterSeries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCharacterSeriesRequest](../../models/operations/get-character-series-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCharacterSeriesResponse](../../models/operations/get-character-series-response.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetCharacterSeriesUnauthorizedError    | 401                                           | application/json                              |
| errors.GetCharacterSeriesPaymentRequiredError | 402                                           | application/json                              |
| errors.GetCharacterSeriesTooManyRequestsError | 429                                           | application/json                              |
| errors.VerseDbDefaultError                    | 4XX, 5XX                                      | \*/\*                                         |

## getCharacterIssues

Returns paginated issues where the character appears, ordered by release date.

Requires PRO subscription on the User API (`/api/...`). Returns 402 Payment Required for non-PRO users on that prefix.
The Mobile API (`/mobile/api/...`) is unrestricted — its route group does not apply the `pro.api` middleware.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCharacterIssues" method="get" path="/api/v1/characters/{character_id}/issues" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.characters.getCharacterIssues({
    characterId: 456,
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
import { charactersGetCharacterIssues } from "@versedbcom/sdk/funcs/characters-get-character-issues.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await charactersGetCharacterIssues(verseDB, {
    characterId: 456,
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("charactersGetCharacterIssues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCharacterIssuesRequest](../../models/operations/get-character-issues-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCharacterIssuesResponse](../../models/operations/get-character-issues-response.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetCharacterIssuesUnauthorizedError    | 401                                           | application/json                              |
| errors.GetCharacterIssuesPaymentRequiredError | 402                                           | application/json                              |
| errors.GetCharacterIssuesTooManyRequestsError | 429                                           | application/json                              |
| errors.VerseDbDefaultError                    | 4XX, 5XX                                      | \*/\*                                         |

## getCharacterTeams

Returns paginated teams the character is a member of, including membership details.

Requires PRO subscription on the User API (`/api/...`). Returns 402 Payment Required for non-PRO users on that prefix.
The Mobile API (`/mobile/api/...`) is unrestricted — its route group does not apply the `pro.api` middleware.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCharacterTeams" method="get" path="/api/v1/characters/{character_id}/teams" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.characters.getCharacterTeams({
    characterId: 456,
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
import { charactersGetCharacterTeams } from "@versedbcom/sdk/funcs/characters-get-character-teams.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await charactersGetCharacterTeams(verseDB, {
    characterId: 456,
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("charactersGetCharacterTeams failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCharacterTeamsRequest](../../models/operations/get-character-teams-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCharacterTeamsResponse](../../models/operations/get-character-teams-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetCharacterTeamsUnauthorizedError    | 401                                          | application/json                             |
| errors.GetCharacterTeamsPaymentRequiredError | 402                                          | application/json                             |
| errors.GetCharacterTeamsTooManyRequestsError | 429                                          | application/json                             |
| errors.VerseDbDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |