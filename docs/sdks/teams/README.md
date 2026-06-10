# Teams

## Overview


Endpoints for browsing superhero teams and their members.

### Available Operations

* [listAllTeamsWithOptionalSearch](#listallteamswithoptionalsearch) - List all teams with optional search
* [getASpecificTeam](#getaspecificteam) - Get a specific team
* [getCharactersForASpecificTeammembers](#getcharactersforaspecificteammembers) - Get characters for a specific team (members)
* [getSeriesForASpecificTeam](#getseriesforaspecificteam) - Get series for a specific team
* [getIssuesForASpecificTeam](#getissuesforaspecificteam) - Get issues for a specific team

## listAllTeamsWithOptionalSearch

List all teams with optional search

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAllTeamsWithOptionalSearch" method="get" path="/api/v1/teams" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.teams.listAllTeamsWithOptionalSearch({
    q: "avengers",
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
import { teamsListAllTeamsWithOptionalSearch } from "@versedbcom/sdk/funcs/teams-list-all-teams-with-optional-search.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await teamsListAllTeamsWithOptionalSearch(verseDB, {
    q: "avengers",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsListAllTeamsWithOptionalSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllTeamsWithOptionalSearchRequest](../../models/operations/list-all-teams-with-optional-search-request.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllTeamsWithOptionalSearchResponse](../../models/operations/list-all-teams-with-optional-search-response.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ListAllTeamsWithOptionalSearchUnauthorizedError    | 401                                                       | application/json                                          |
| errors.ListAllTeamsWithOptionalSearchTooManyRequestsError | 429                                                       | application/json                                          |
| errors.VerseDbDefaultError                                | 4XX, 5XX                                                  | \*/\*                                                     |

## getASpecificTeam

Returns team details without relationship data.
Use PRO endpoints for relationship data:
- /teams/{id}/characters - Get team members
- /teams/{id}/series - Get team's series appearances
- /teams/{id}/issues - Get team's issue appearances

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getASpecificTeam" method="get" path="/api/v1/teams/{team_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.teams.getASpecificTeam({
    teamId: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { teamsGetASpecificTeam } from "@versedbcom/sdk/funcs/teams-get-a-specific-team.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await teamsGetASpecificTeam(verseDB, {
    teamId: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsGetASpecificTeam failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetASpecificTeamRequest](../../models/operations/get-a-specific-team-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetASpecificTeamResponse](../../models/operations/get-a-specific-team-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetASpecificTeamUnauthorizedError    | 401                                         | application/json                            |
| errors.GetASpecificTeamTooManyRequestsError | 429                                         | application/json                            |
| errors.VerseDbDefaultError                  | 4XX, 5XX                                    | \*/\*                                       |

## getCharactersForASpecificTeammembers

On the User API (routes/api/data.php), this route is gated by the `pro.api` middleware and returns
402 Payment Required for non-PRO users. The mobile API exposes it without
that gate.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCharactersForASpecificTeammembers" method="get" path="/api/v1/teams/{team_id}/characters" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.teams.getCharactersForASpecificTeammembers({
    teamId: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { teamsGetCharactersForASpecificTeammembers } from "@versedbcom/sdk/funcs/teams-get-characters-for-a-specific-teammembers.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await teamsGetCharactersForASpecificTeammembers(verseDB, {
    teamId: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsGetCharactersForASpecificTeammembers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCharactersForASpecificTeammembersRequest](../../models/operations/get-characters-for-a-specific-teammembers-request.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCharactersForASpecificTeammembersResponse](../../models/operations/get-characters-for-a-specific-teammembers-response.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.GetCharactersForASpecificTeammembersUnauthorizedError    | 401                                                             | application/json                                                |
| errors.GetCharactersForASpecificTeammembersTooManyRequestsError | 429                                                             | application/json                                                |
| errors.VerseDbDefaultError                                      | 4XX, 5XX                                                        | \*/\*                                                           |

## getSeriesForASpecificTeam

On the User API (routes/api/data.php), this route is gated by the `pro.api` middleware and returns
402 Payment Required for non-PRO users. The mobile API exposes it without
that gate.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSeriesForASpecificTeam" method="get" path="/api/v1/teams/{team_id}/series" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.teams.getSeriesForASpecificTeam({
    teamId: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { teamsGetSeriesForASpecificTeam } from "@versedbcom/sdk/funcs/teams-get-series-for-a-specific-team.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await teamsGetSeriesForASpecificTeam(verseDB, {
    teamId: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsGetSeriesForASpecificTeam failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSeriesForASpecificTeamRequest](../../models/operations/get-series-for-a-specific-team-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSeriesForASpecificTeamResponse](../../models/operations/get-series-for-a-specific-team-response.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.GetSeriesForASpecificTeamUnauthorizedError    | 401                                                  | application/json                                     |
| errors.GetSeriesForASpecificTeamTooManyRequestsError | 429                                                  | application/json                                     |
| errors.VerseDbDefaultError                           | 4XX, 5XX                                             | \*/\*                                                |

## getIssuesForASpecificTeam

On the User API (routes/api/data.php), this route is gated by the `pro.api` middleware and returns
402 Payment Required for non-PRO users. The mobile API exposes it without
that gate.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIssuesForASpecificTeam" method="get" path="/api/v1/teams/{team_id}/issues" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.teams.getIssuesForASpecificTeam({
    teamId: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { teamsGetIssuesForASpecificTeam } from "@versedbcom/sdk/funcs/teams-get-issues-for-a-specific-team.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await teamsGetIssuesForASpecificTeam(verseDB, {
    teamId: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsGetIssuesForASpecificTeam failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIssuesForASpecificTeamRequest](../../models/operations/get-issues-for-a-specific-team-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIssuesForASpecificTeamResponse](../../models/operations/get-issues-for-a-specific-team-response.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.GetIssuesForASpecificTeamUnauthorizedError    | 401                                                  | application/json                                     |
| errors.GetIssuesForASpecificTeamTooManyRequestsError | 429                                                  | application/json                                     |
| errors.VerseDbDefaultError                           | 4XX, 5XX                                             | \*/\*                                                |