# Gamification

## Overview


Endpoints for XP, achievements, badges, and the leaderboard.

### Available Operations

* [getAchievementsForTheAuthenticatedUser](#getachievementsfortheauthenticateduser) - Get achievements for the authenticated user.

## getAchievementsForTheAuthenticatedUser

Returns earned achievements and optionally in-progress and all achievements.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAchievementsForTheAuthenticatedUser" method="get" path="/api/v1/user/achievements" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.gamification.getAchievementsForTheAuthenticatedUser({
    includeProgress: false,
    includeAll: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { gamificationGetAchievementsForTheAuthenticatedUser } from "@versedbcom/sdk/funcs/gamification-get-achievements-for-the-authenticated-user.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await gamificationGetAchievementsForTheAuthenticatedUser(verseDB, {
    includeProgress: false,
    includeAll: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gamificationGetAchievementsForTheAuthenticatedUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAchievementsForTheAuthenticatedUserRequest](../../models/operations/get-achievements-for-the-authenticated-user-request.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAchievementsForTheAuthenticatedUserResponse](../../models/operations/get-achievements-for-the-authenticated-user-response.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.GetAchievementsForTheAuthenticatedUserUnauthorizedError    | 401                                                               | application/json                                                  |
| errors.GetAchievementsForTheAuthenticatedUserTooManyRequestsError | 429                                                               | application/json                                                  |
| errors.VerseDbDefaultError                                        | 4XX, 5XX                                                          | \*/\*                                                             |