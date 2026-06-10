# KeyIssueReasons

## Overview


Endpoints for browsing key issue reasons (e.g., "1st Appearance", "Death", "Origin").
These are reusable labels that can be attached to issues to indicate significance.

### Available Operations

* [listKeyIssueReasons](#listkeyissuereasons) - List key issue reasons.

## listKeyIssueReasons

Returns all active key issue reasons, optionally filtered by category.
Useful for client-side pickers and filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listKeyIssueReasons" method="get" path="/api/v1/key-issue-reasons" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.keyIssueReasons.listKeyIssueReasons({
    category: "appearance",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { keyIssueReasonsListKeyIssueReasons } from "@versedbcom/sdk/funcs/key-issue-reasons-list-key-issue-reasons.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await keyIssueReasonsListKeyIssueReasons(verseDB, {
    category: "appearance",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keyIssueReasonsListKeyIssueReasons failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListKeyIssueReasonsRequest](../../models/operations/list-key-issue-reasons-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListKeyIssueReasonsResponse](../../models/operations/list-key-issue-reasons-response.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.ListKeyIssueReasonsUnauthorizedError    | 401                                            | application/json                               |
| errors.ListKeyIssueReasonsTooManyRequestsError | 429                                            | application/json                               |
| errors.VerseDbDefaultError                     | 4XX, 5XX                                       | \*/\*                                          |