# Series

## Overview


Endpoints for browsing and searching comic book series.

A series represents a specific volume or run of a title (e.g., "Amazing Spider-Man (2018)").
PRO subscription required for relationship endpoints (/series/{id}/issues, etc.).

### Available Operations

* [listSeries](#listseries) - List series.
* [getSeriesDetails](#getseriesdetails) - Get series details.
* [getSeriesIssues](#getseriesissues) - Get series issues.
* [getSeriesCreators](#getseriescreators) - Get series creators.
* [getSeriesCharacters](#getseriescharacters) - Get series characters.

## listSeries

Returns paginated series with optional search and filtering.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSeries" method="get" path="/api/v1/series" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.series.listSeries({
    q: "spider-man",
    titleId: 1,
    sort: "start_year",
    direction: "desc",
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
import { seriesListSeries } from "@versedbcom/sdk/funcs/series-list-series.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await seriesListSeries(verseDB, {
    q: "spider-man",
    titleId: 1,
    sort: "start_year",
    direction: "desc",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("seriesListSeries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSeriesRequest](../../models/operations/list-series-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSeriesResponse](../../models/operations/list-series-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.ListSeriesUnauthorizedError    | 401                                   | application/json                      |
| errors.ListSeriesTooManyRequestsError | 429                                   | application/json                      |
| errors.VerseDbDefaultError            | 4XX, 5XX                              | \*/\*                                 |

## getSeriesDetails

Returns a single series with full details including related title, publishers, and genres.
For relationship data (issues, creators, characters), use the PRO endpoints.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSeriesDetails" method="get" path="/api/v1/series/{series_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.series.getSeriesDetails({
    seriesId: 123,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { seriesGetSeriesDetails } from "@versedbcom/sdk/funcs/series-get-series-details.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await seriesGetSeriesDetails(verseDB, {
    seriesId: 123,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("seriesGetSeriesDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSeriesDetailsRequest](../../models/operations/get-series-details-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSeriesDetailsResponse](../../models/operations/get-series-details-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetSeriesDetailsUnauthorizedError    | 401                                         | application/json                            |
| errors.GetSeriesDetailsNotFoundError        | 404                                         | application/json                            |
| errors.GetSeriesDetailsTooManyRequestsError | 429                                         | application/json                            |
| errors.VerseDbDefaultError                  | 4XX, 5XX                                    | \*/\*                                       |

## getSeriesIssues

Returns paginated issues for a specific series. Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSeriesIssues" method="get" path="/api/v1/series/{id}/issues" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.series.getSeriesIssues({
    id: 123,
    sort: "issue_number",
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
import { seriesGetSeriesIssues } from "@versedbcom/sdk/funcs/series-get-series-issues.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await seriesGetSeriesIssues(verseDB, {
    id: 123,
    sort: "issue_number",
    direction: "asc",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("seriesGetSeriesIssues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSeriesIssuesRequest](../../models/operations/get-series-issues-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSeriesIssuesResponse](../../models/operations/get-series-issues-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetSeriesIssuesUnauthorizedError    | 401                                        | application/json                           |
| errors.GetSeriesIssuesPaymentRequiredError | 402                                        | application/json                           |
| errors.GetSeriesIssuesTooManyRequestsError | 429                                        | application/json                           |
| errors.VerseDbDefaultError                 | 4XX, 5XX                                   | \*/\*                                      |

## getSeriesCreators

Returns paginated creators associated with a specific series. Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSeriesCreators" method="get" path="/api/v1/series/{id}/creators" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.series.getSeriesCreators({
    id: 123,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { seriesGetSeriesCreators } from "@versedbcom/sdk/funcs/series-get-series-creators.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await seriesGetSeriesCreators(verseDB, {
    id: 123,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("seriesGetSeriesCreators failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSeriesCreatorsRequest](../../models/operations/get-series-creators-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSeriesCreatorsResponse](../../models/operations/get-series-creators-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetSeriesCreatorsUnauthorizedError    | 401                                          | application/json                             |
| errors.GetSeriesCreatorsPaymentRequiredError | 402                                          | application/json                             |
| errors.GetSeriesCreatorsTooManyRequestsError | 429                                          | application/json                             |
| errors.VerseDbDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |

## getSeriesCharacters

Returns paginated characters appearing in a specific series. Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSeriesCharacters" method="get" path="/api/v1/series/{id}/characters" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.series.getSeriesCharacters({
    id: 123,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { seriesGetSeriesCharacters } from "@versedbcom/sdk/funcs/series-get-series-characters.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await seriesGetSeriesCharacters(verseDB, {
    id: 123,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("seriesGetSeriesCharacters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSeriesCharactersRequest](../../models/operations/get-series-characters-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSeriesCharactersResponse](../../models/operations/get-series-characters-response.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.GetSeriesCharactersUnauthorizedError    | 401                                            | application/json                               |
| errors.GetSeriesCharactersPaymentRequiredError | 402                                            | application/json                               |
| errors.GetSeriesCharactersTooManyRequestsError | 429                                            | application/json                               |
| errors.VerseDbDefaultError                     | 4XX, 5XX                                       | \*/\*                                          |