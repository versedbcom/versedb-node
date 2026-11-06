# StoryArcs

## Overview


Endpoints for browsing story arcs and crossover events.

### Available Operations

* [getStoryArcsForASpecificIssue](#getstoryarcsforaspecificissue) - Get story arcs for a specific issue
* [getStoryArcsForASpecificCharacter](#getstoryarcsforaspecificcharacter) - Get story arcs for a specific character

## getStoryArcsForASpecificIssue

Returns every story arc the given issue is part of.

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
    q: "batman",
    limit: 20,
    languages: "ja,ko",
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
    q: "batman",
    limit: 20,
    languages: "ja,ko",
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorError | 401                           | application/json              |
| errors.TooManyRequestsError   | 429                           | application/json              |
| errors.VerseDbDefaultError    | 4XX, 5XX                      | \*/\*                         |

## getStoryArcsForASpecificCharacter

Returns every story arc the given character appears in.

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
    q: "batman",
    limit: 20,
    languages: "ja,ko",
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
    q: "batman",
    limit: 20,
    languages: "ja,ko",
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorError | 401                           | application/json              |
| errors.TooManyRequestsError   | 429                           | application/json              |
| errors.VerseDbDefaultError    | 4XX, 5XX                      | \*/\*                         |