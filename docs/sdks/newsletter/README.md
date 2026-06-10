# Newsletter

## Overview


Endpoints for managing newsletter subscription preferences.

### Available Operations

* [getTheAuthenticatedUsersNewsletterSubscriptionStatus](#gettheauthenticatedusersnewslettersubscriptionstatus) - Get the authenticated user's newsletter subscription status.
* [subscribeTheAuthenticatedUserToTheNewsletter](#subscribetheauthenticatedusertothenewsletter) - Subscribe the authenticated user to the newsletter.
* [unsubscribeTheAuthenticatedUserFromTheNewsletter](#unsubscribetheauthenticateduserfromthenewsletter) - Unsubscribe the authenticated user from the newsletter.

## getTheAuthenticatedUsersNewsletterSubscriptionStatus

Get the authenticated user's newsletter subscription status.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTheAuthenticatedUsersNewsletterSubscriptionStatus" method="get" path="/api/v1/user/newsletter" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.newsletter.getTheAuthenticatedUsersNewsletterSubscriptionStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { newsletterGetTheAuthenticatedUsersNewsletterSubscriptionStatus } from "@versedbcom/sdk/funcs/newsletter-get-the-authenticated-users-newsletter-subscription-status.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await newsletterGetTheAuthenticatedUsersNewsletterSubscriptionStatus(verseDB);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("newsletterGetTheAuthenticatedUsersNewsletterSubscriptionStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTheAuthenticatedUsersNewsletterSubscriptionStatusResponse](../../models/operations/get-the-authenticated-users-newsletter-subscription-status-response.md)\>**

### Errors

| Error Type                                                                      | Status Code                                                                     | Content Type                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| errors.GetTheAuthenticatedUsersNewsletterSubscriptionStatusUnauthorizedError    | 401                                                                             | application/json                                                                |
| errors.GetTheAuthenticatedUsersNewsletterSubscriptionStatusTooManyRequestsError | 429                                                                             | application/json                                                                |
| errors.VerseDbDefaultError                                                      | 4XX, 5XX                                                                        | \*/\*                                                                           |

## subscribeTheAuthenticatedUserToTheNewsletter

Subscribe the authenticated user to the newsletter.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="subscribeTheAuthenticatedUserToTheNewsletter" method="post" path="/api/v1/user/newsletter/subscribe" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.newsletter.subscribeTheAuthenticatedUserToTheNewsletter();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { newsletterSubscribeTheAuthenticatedUserToTheNewsletter } from "@versedbcom/sdk/funcs/newsletter-subscribe-the-authenticated-user-to-the-newsletter.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await newsletterSubscribeTheAuthenticatedUserToTheNewsletter(verseDB);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("newsletterSubscribeTheAuthenticatedUserToTheNewsletter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscribeTheAuthenticatedUserToTheNewsletterResponse](../../models/operations/subscribe-the-authenticated-user-to-the-newsletter-response.md)\>**

### Errors

| Error Type                                                              | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.SubscribeTheAuthenticatedUserToTheNewsletterUnauthorizedError    | 401                                                                     | application/json                                                        |
| errors.SubscribeTheAuthenticatedUserToTheNewsletterConflictError        | 409                                                                     | application/json                                                        |
| errors.SubscribeTheAuthenticatedUserToTheNewsletterTooManyRequestsError | 429                                                                     | application/json                                                        |
| errors.VerseDbDefaultError                                              | 4XX, 5XX                                                                | \*/\*                                                                   |

## unsubscribeTheAuthenticatedUserFromTheNewsletter

Unsubscribe the authenticated user from the newsletter.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unsubscribeTheAuthenticatedUserFromTheNewsletter" method="post" path="/api/v1/user/newsletter/unsubscribe" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.newsletter.unsubscribeTheAuthenticatedUserFromTheNewsletter();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { newsletterUnsubscribeTheAuthenticatedUserFromTheNewsletter } from "@versedbcom/sdk/funcs/newsletter-unsubscribe-the-authenticated-user-from-the-newsletter.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await newsletterUnsubscribeTheAuthenticatedUserFromTheNewsletter(verseDB);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("newsletterUnsubscribeTheAuthenticatedUserFromTheNewsletter failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnsubscribeTheAuthenticatedUserFromTheNewsletterResponse](../../models/operations/unsubscribe-the-authenticated-user-from-the-newsletter-response.md)\>**

### Errors

| Error Type                                                                  | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.UnsubscribeTheAuthenticatedUserFromTheNewsletterUnauthorizedError    | 401                                                                         | application/json                                                            |
| errors.UnsubscribeTheAuthenticatedUserFromTheNewsletterNotFoundError        | 404                                                                         | application/json                                                            |
| errors.UnsubscribeTheAuthenticatedUserFromTheNewsletterTooManyRequestsError | 429                                                                         | application/json                                                            |
| errors.VerseDbDefaultError                                                  | 4XX, 5XX                                                                    | \*/\*                                                                       |