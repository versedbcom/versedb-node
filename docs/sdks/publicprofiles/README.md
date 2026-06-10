# PublicProfiles

## Overview


Endpoints for viewing other users' public profile data.
All responses respect user privacy settings.

### Available Operations

* [getUserProfile](#getuserprofile) - Get user profile.

## getUserProfile

Returns a user's public profile data, respecting all privacy settings.
If the profile is private and the viewer is not the owner, only basic info is returned.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUserProfile" method="get" path="/api/v1/users/{username}/profile" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.publicProfiles.getUserProfile({
    username: "comic_fan_42",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { publicProfilesGetUserProfile } from "@versedbcom/sdk/funcs/public-profiles-get-user-profile.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await publicProfilesGetUserProfile(verseDB, {
    username: "comic_fan_42",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicProfilesGetUserProfile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserProfileRequest](../../models/operations/get-user-profile-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserProfileResponse](../../models/operations/get-user-profile-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetUserProfileUnauthorizedError    | 401                                       | application/json                          |
| errors.GetUserProfileNotFoundError        | 404                                       | application/json                          |
| errors.GetUserProfileTooManyRequestsError | 429                                       | application/json                          |
| errors.VerseDbDefaultError                | 4XX, 5XX                                  | \*/\*                                     |