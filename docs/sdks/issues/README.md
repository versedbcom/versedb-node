# Issues

## Overview


Endpoints for browsing and searching comic book issues.

An issue is a single publication in a series (e.g., "Amazing Spider-Man #1").
PRO subscription required for variants and relationship endpoints.

### Available Operations

* [listIssues](#listissues) - List issues.
* [getIssueDetails](#getissuedetails) - Get issue details.
* [getIssueVariants](#getissuevariants) - Get issue variants.
* [getVariantDetails](#getvariantdetails) - Get variant details.
* [getIssueCreators](#getissuecreators) - Get issue creators.
* [getIssueCharacters](#getissuecharacters) - Get issue characters.
* [getKeyIssueReasons](#getkeyissuereasons) - Get key issue reasons.

## listIssues

Returns paginated issues with optional search, filtering, and sorting.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listIssues" method="get" path="/api/v1/issues" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.issues.listIssues({
    q: "origin",
    seriesId: 123,
    publisherId: 1,
    releaseDateFrom: "2024-01-01",
    releaseDateTo: "2024-12-31",
    include: "series",
    sort: "release_date",
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
import { issuesListIssues } from "@versedbcom/sdk/funcs/issues-list-issues.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await issuesListIssues(verseDB, {
    q: "origin",
    seriesId: 123,
    publisherId: 1,
    releaseDateFrom: "2024-01-01",
    releaseDateTo: "2024-12-31",
    include: "series",
    sort: "release_date",
    direction: "desc",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issuesListIssues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIssuesRequest](../../models/operations/list-issues-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIssuesResponse](../../models/operations/list-issues-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.ListIssuesUnauthorizedError    | 401                                   | application/json                      |
| errors.ListIssuesTooManyRequestsError | 429                                   | application/json                      |
| errors.VerseDbDefaultError            | 4XX, 5XX                              | \*/\*                                 |

## getIssueDetails

Returns a single issue with full details including series, title, publishers,
creators, characters, teams, and story arcs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIssueDetails" method="get" path="/api/v1/issues/{issue_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.issues.getIssueDetails({
    issueId: 5432,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { issuesGetIssueDetails } from "@versedbcom/sdk/funcs/issues-get-issue-details.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await issuesGetIssueDetails(verseDB, {
    issueId: 5432,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issuesGetIssueDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIssueDetailsRequest](../../models/operations/get-issue-details-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIssueDetailsResponse](../../models/operations/get-issue-details-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetIssueDetailsUnauthorizedError    | 401                                        | application/json                           |
| errors.GetIssueDetailsNotFoundError        | 404                                        | application/json                           |
| errors.GetIssueDetailsTooManyRequestsError | 429                                        | application/json                           |
| errors.VerseDbDefaultError                 | 4XX, 5XX                                   | \*/\*                                      |

## getIssueVariants

Returns all variant covers for a specific issue. Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIssueVariants" method="get" path="/api/v1/issues/{issue_id}/variants" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.issues.getIssueVariants({
    issueId: 5432,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { issuesGetIssueVariants } from "@versedbcom/sdk/funcs/issues-get-issue-variants.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await issuesGetIssueVariants(verseDB, {
    issueId: 5432,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issuesGetIssueVariants failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIssueVariantsRequest](../../models/operations/get-issue-variants-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIssueVariantsResponse](../../models/operations/get-issue-variants-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetIssueVariantsUnauthorizedError    | 401                                         | application/json                            |
| errors.GetIssueVariantsPaymentRequiredError | 402                                         | application/json                            |
| errors.GetIssueVariantsTooManyRequestsError | 429                                         | application/json                            |
| errors.VerseDbDefaultError                  | 4XX, 5XX                                    | \*/\*                                       |

## getVariantDetails

Returns a specific variant cover with full details. Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVariantDetails" method="get" path="/api/v1/issues/{issue_id}/variants/{variant_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.issues.getVariantDetails({
    issueId: 5432,
    variantId: 9001,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { issuesGetVariantDetails } from "@versedbcom/sdk/funcs/issues-get-variant-details.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await issuesGetVariantDetails(verseDB, {
    issueId: 5432,
    variantId: 9001,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issuesGetVariantDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVariantDetailsRequest](../../models/operations/get-variant-details-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVariantDetailsResponse](../../models/operations/get-variant-details-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetVariantDetailsUnauthorizedError    | 401                                          | application/json                             |
| errors.GetVariantDetailsPaymentRequiredError | 402                                          | application/json                             |
| errors.GetVariantDetailsNotFoundError        | 404                                          | application/json                             |
| errors.GetVariantDetailsTooManyRequestsError | 429                                          | application/json                             |
| errors.VerseDbDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |

## getIssueCreators

Returns paginated creators for a specific issue with their roles. Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIssueCreators" method="get" path="/api/v1/issues/{id}/creators" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.issues.getIssueCreators({
    id: 5432,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { issuesGetIssueCreators } from "@versedbcom/sdk/funcs/issues-get-issue-creators.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await issuesGetIssueCreators(verseDB, {
    id: 5432,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issuesGetIssueCreators failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIssueCreatorsRequest](../../models/operations/get-issue-creators-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIssueCreatorsResponse](../../models/operations/get-issue-creators-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetIssueCreatorsUnauthorizedError    | 401                                         | application/json                            |
| errors.GetIssueCreatorsPaymentRequiredError | 402                                         | application/json                            |
| errors.GetIssueCreatorsTooManyRequestsError | 429                                         | application/json                            |
| errors.VerseDbDefaultError                  | 4XX, 5XX                                    | \*/\*                                       |

## getIssueCharacters

Returns paginated characters appearing in a specific issue. Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getIssueCharacters" method="get" path="/api/v1/issues/{id}/characters" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.issues.getIssueCharacters({
    id: 5432,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { issuesGetIssueCharacters } from "@versedbcom/sdk/funcs/issues-get-issue-characters.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await issuesGetIssueCharacters(verseDB, {
    id: 5432,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issuesGetIssueCharacters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIssueCharactersRequest](../../models/operations/get-issue-characters-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIssueCharactersResponse](../../models/operations/get-issue-characters-response.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetIssueCharactersUnauthorizedError    | 401                                           | application/json                              |
| errors.GetIssueCharactersPaymentRequiredError | 402                                           | application/json                              |
| errors.GetIssueCharactersTooManyRequestsError | 429                                           | application/json                              |
| errors.VerseDbDefaultError                    | 4XX, 5XX                                      | \*/\*                                         |

## getKeyIssueReasons

Returns key issue reasons for a specific issue (e.g., "1st Appearance", "Death").
Requires PRO subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getKeyIssueReasons" method="get" path="/api/v1/issues/{issue_id}/key-reasons" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.issues.getKeyIssueReasons({
    issueId: 5432,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { issuesGetKeyIssueReasons } from "@versedbcom/sdk/funcs/issues-get-key-issue-reasons.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await issuesGetKeyIssueReasons(verseDB, {
    issueId: 5432,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issuesGetKeyIssueReasons failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKeyIssueReasonsRequest](../../models/operations/get-key-issue-reasons-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetKeyIssueReasonsResponse](../../models/operations/get-key-issue-reasons-response.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetKeyIssueReasonsUnauthorizedError    | 401                                           | application/json                              |
| errors.GetKeyIssueReasonsPaymentRequiredError | 402                                           | application/json                              |
| errors.GetKeyIssueReasonsTooManyRequestsError | 429                                           | application/json                              |
| errors.VerseDbDefaultError                    | 4XX, 5XX                                      | \*/\*                                         |