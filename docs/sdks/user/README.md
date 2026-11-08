# User

## Overview


Endpoints for managing the authenticated user's pull list, follows, and reading progress.

All endpoints in this group require authentication with a Bearer API token.

### Available Operations

* [getTheAuthenticatedUser](#gettheauthenticateduser) - Get the authenticated user.
* [listReadStatus](#listreadstatus) - List read status.
* [listWishlist](#listwishlist) - List wishlist.
* [listCollection](#listcollection) - List collection.
* [checkIssueInCollection](#checkissueincollection) - Check issue in collection.
* [listPullList](#listpulllist) - List pull list.
* [markAsRead](#markasread) - Mark as read.
* [markAsUnread](#markasunread) - Mark as unread.
* [editReadingDate](#editreadingdate) - Edit reading date.
* [addToWishlist](#addtowishlist) - Add to wishlist.
* [removeFromWishlist](#removefromwishlist) - Remove from wishlist.
* [addToPullList](#addtopulllist) - Add to pull list.
* [removeFromPullList](#removefrompulllist) - Remove from pull list.
* [addIssueToCollection](#addissuetocollection) - Add issue to collection.
* [removeIssueFromCollection](#removeissuefromcollection) - Remove issue from collection.
* [updateCollectionItem](#updatecollectionitem) - Update collection item.
* [lendACopyOut](#lendacopyout) - Lend a copy out.
* [markTheCopysOpenLoanReturned](#markthecopysopenloanreturned) - Mark the copy's open loan returned.
* [listFollows](#listfollows) - List follows.
* [checkFollowStatus](#checkfollowstatus) - Check follow status.
* [followContent](#followcontent) - Follow content.
* [unfollowContent](#unfollowcontent) - Unfollow content.
* [~~getActivityFeed~~](#getactivityfeed) - Get activity feed. :warning: **Deprecated**

## getTheAuthenticatedUser

Returns the profile of the user the token belongs to.

Needs `read:user` or `read:showcase`. A `read:showcase` token gets only `id`, `name`,
`username`, `bio`, the avatar and banner fields, `is_pro`, the level and XP fields,
`created_at` and `updated_at`: no email, location, birth date, preferences, or
notification and account settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTheAuthenticatedUser" method="get" path="/api/v1/user" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.getTheAuthenticatedUser();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userGetTheAuthenticatedUser } from "@versedbcom/sdk/funcs/user-get-the-authenticated-user.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userGetTheAuthenticatedUser(verseDB);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGetTheAuthenticatedUser failed:", res.error);
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

**Promise\<[operations.GetTheAuthenticatedUserResponse](../../models/operations/get-the-authenticated-user-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.UnauthorizedErrorError                | 401                                          | application/json                             |
| errors.GetTheAuthenticatedUserForbiddenError | 403                                          | application/json                             |
| errors.TooManyRequestsError                  | 429                                          | application/json                             |
| errors.VerseDbDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |

## listReadStatus

Returns all issues the user has marked as read with timestamps.

Needs `read:user` or `read:showcase`; both get the same response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listReadStatus" method="get" path="/api/v1/user/read-status" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.listReadStatus({
    perPage: 20,
    unreviewed: true,
    q: "saga 12",
    sort: "read_at_asc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userListReadStatus } from "@versedbcom/sdk/funcs/user-list-read-status.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userListReadStatus(verseDB, {
    perPage: 20,
    unreviewed: true,
    q: "saga 12",
    sort: "read_at_asc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userListReadStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListReadStatusRequest](../../models/operations/list-read-status-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListReadStatusResponse](../../models/operations/list-read-status-response.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.UnauthorizedErrorError       | 401                                 | application/json                    |
| errors.ListReadStatusForbiddenError | 403                                 | application/json                    |
| errors.TooManyRequestsError         | 429                                 | application/json                    |
| errors.VerseDbDefaultError          | 4XX, 5XX                            | \*/\*                               |

## listWishlist

Returns the authenticated user's wishlist issues, most recently added first.

Needs `read:user` or `read:showcase`. A `read:showcase` token gets each item without `note`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listWishlist" method="get" path="/api/v1/user/wishlist" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.listWishlist({
    perPage: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userListWishlist } from "@versedbcom/sdk/funcs/user-list-wishlist.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userListWishlist(verseDB, {
    perPage: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userListWishlist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListWishlistRequest](../../models/operations/list-wishlist-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListWishlistResponse](../../models/operations/list-wishlist-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.UnauthorizedErrorError     | 401                               | application/json                  |
| errors.ListWishlistForbiddenError | 403                               | application/json                  |
| errors.TooManyRequestsError       | 429                               | application/json                  |
| errors.VerseDbDefaultError        | 4XX, 5XX                          | \*/\*                             |

## listCollection

Returns the issues in the user's collection, newest added first, each with its issue, series and publisher.

Needs `read:user` or `read:showcase`. A `read:showcase` token gets each copy without
`price_paid`, `estimated_value`, `value_last_updated`, `price_sold`, `sold_at`,
`purchased_at`, `purchase_source`, `purchase_store`, `acquisition_method`,
`comic_shop_id`, `comic_shop`, `notes`, `grader_notes`, `storage_location`,
`custom_label`, `bagged_at`, `personal_rating`, `tags` or `loan`, leaves out copies
marked not public, and the `estimated_value` and `price_paid` sorts fall back to `date_added`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCollection" method="get" path="/api/v1/user/collections" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.listCollection({
    perPage: 20,
    page: 1,
    search: "spider",
    format: "single",
    graded: true,
    isSigned: true,
    condition: "NM",
    status: "sold",
    forSale: true,
    forTrade: true,
    readStatus: "unread",
    publisherId: 1,
    seriesId: 123,
    gradeMin: 9,
    gradeMax: 9.8,
    sortBy: "title",
    sortOrder: "asc",
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
import { userListCollection } from "@versedbcom/sdk/funcs/user-list-collection.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userListCollection(verseDB, {
    perPage: 20,
    page: 1,
    search: "spider",
    format: "single",
    graded: true,
    isSigned: true,
    condition: "NM",
    status: "sold",
    forSale: true,
    forTrade: true,
    readStatus: "unread",
    publisherId: 1,
    seriesId: 123,
    gradeMin: 9,
    gradeMax: 9.8,
    sortBy: "title",
    sortOrder: "asc",
    languages: "ja,ko",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userListCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCollectionRequest](../../models/operations/list-collection-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListCollectionResponse](../../models/operations/list-collection-response.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.UnauthorizedErrorError       | 401                                 | application/json                    |
| errors.ListCollectionForbiddenError | 403                                 | application/json                    |
| errors.TooManyRequestsError         | 429                                 | application/json                    |
| errors.VerseDbDefaultError          | 4XX, 5XX                            | \*/\*                               |

## checkIssueInCollection

Checks if an issue (optionally a specific variant) is in the user's collection: the copies still held (sold ones
left out), oldest first, and the first of them in full.

Needs `read:user`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="checkIssueInCollection" method="get" path="/api/v1/issues/{issue_id}/collection/check" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.checkIssueInCollection({
    issueId: 5432,
    variantId: 789,
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
import { userCheckIssueInCollection } from "@versedbcom/sdk/funcs/user-check-issue-in-collection.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userCheckIssueInCollection(verseDB, {
    issueId: 5432,
    variantId: 789,
    languages: "ja,ko",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCheckIssueInCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CheckIssueInCollectionRequest](../../models/operations/check-issue-in-collection-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CheckIssueInCollectionResponse](../../models/operations/check-issue-in-collection-response.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.UnauthorizedErrorError                         | 401                                                   | application/json                                      |
| errors.CheckIssueInCollectionForbiddenError           | 403                                                   | application/json                                      |
| errors.CheckIssueInCollectionUnprocessableEntityError | 422                                                   | application/json                                      |
| errors.TooManyRequestsError                           | 429                                                   | application/json                                      |
| errors.VerseDbDefaultError                            | 4XX, 5XX                                              | \*/\*                                                 |

## listPullList

Returns all series on the user's pull list (series they're tracking for new releases), most recently added first.

Needs `read:user` or `read:showcase`. A `read:showcase` token gets each entry without
`personal_notes`, `notify_on_release`, `notification_settings`, `auto_pull`,
`last_pulled_at`, `preferred_cover_type`, `pull_priority` or the pull source fields.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPullList" method="get" path="/api/v1/user/pull-list" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.listPullList({
    perPage: 20,
    page: 1,
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
import { userListPullList } from "@versedbcom/sdk/funcs/user-list-pull-list.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userListPullList(verseDB, {
    perPage: 20,
    page: 1,
    languages: "ja,ko",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userListPullList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPullListRequest](../../models/operations/list-pull-list-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPullListResponse](../../models/operations/list-pull-list-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.UnauthorizedErrorError     | 401                               | application/json                  |
| errors.ListPullListForbiddenError | 403                               | application/json                  |
| errors.TooManyRequestsError       | 429                               | application/json                  |
| errors.VerseDbDefaultError        | 4XX, 5XX                          | \*/\*                             |

## markAsRead

Marks an issue (optionally a specific variant) as read with the current timestamp.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="markAsRead" method="post" path="/api/v1/issues/{issue_id}/read-status" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.markAsRead({
    issueId: 5432,
    body: {
      variantId: 789,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userMarkAsRead } from "@versedbcom/sdk/funcs/user-mark-as-read.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userMarkAsRead(verseDB, {
    issueId: 5432,
    body: {
      variantId: 789,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userMarkAsRead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MarkAsReadRequest](../../models/operations/mark-as-read-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MarkAsReadResponse](../../models/operations/mark-as-read-response.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.UnauthorizedErrorError       | 401                                 | application/json                    |
| errors.MarkAsReadForbiddenError     | 403                                 | application/json                    |
| errors.MarkAsReadNotFoundError      | 404                                 | application/json                    |
| errors.MarkAsReadResponseBodyError1 | 422                                 | application/json                    |
| errors.MarkAsReadResponseBodyError2 | 422                                 | application/json                    |
| errors.MarkAsReadResponseBodyError3 | 422                                 | application/json                    |
| errors.TooManyRequestsError         | 429                                 | application/json                    |
| errors.VerseDbDefaultError          | 4XX, 5XX                            | \*/\*                               |

## markAsUnread

Removes the read status for an issue (optionally a specific variant).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="markAsUnread" method="delete" path="/api/v1/issues/{issue_id}/read-status" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.markAsUnread({
    issueId: 5432,
    body: {
      variantId: null,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userMarkAsUnread } from "@versedbcom/sdk/funcs/user-mark-as-unread.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userMarkAsUnread(verseDB, {
    issueId: 5432,
    body: {
      variantId: null,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userMarkAsUnread failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MarkAsUnreadRequest](../../models/operations/mark-as-unread-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MarkAsUnreadResponse](../../models/operations/mark-as-unread-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.UnauthorizedErrorError               | 401                                         | application/json                            |
| errors.MarkAsUnreadForbiddenError           | 403                                         | application/json                            |
| errors.MarkAsUnreadNotFoundError            | 404                                         | application/json                            |
| errors.MarkAsUnreadUnprocessableEntityError | 422                                         | application/json                            |
| errors.TooManyRequestsError                 | 429                                         | application/json                            |
| errors.VerseDbDefaultError                  | 4XX, 5XX                                    | \*/\*                                       |

## editReadingDate

Updates the `read_at` date on an existing read entry, or removes the entry when `read_at` is null.
If no entry exists yet and a date is provided, one is created (upsert).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="editReadingDate" method="patch" path="/api/v1/issues/{issue_id}/read-status" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.editReadingDate({
    issueId: 5432,
    body: {
      readAt: "2026-03-01",
      variantId: 789,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userEditReadingDate } from "@versedbcom/sdk/funcs/user-edit-reading-date.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userEditReadingDate(verseDB, {
    issueId: 5432,
    body: {
      readAt: "2026-03-01",
      variantId: 789,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userEditReadingDate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EditReadingDateRequest](../../models/operations/edit-reading-date-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EditReadingDateResponse](../../models/operations/edit-reading-date-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.UnauthorizedErrorError            | 401                                      | application/json                         |
| errors.EditReadingDateForbiddenError     | 403                                      | application/json                         |
| errors.EditReadingDateNotFoundError      | 404                                      | application/json                         |
| errors.EditReadingDateResponseBodyError1 | 422                                      | application/json                         |
| errors.EditReadingDateResponseBodyError2 | 422                                      | application/json                         |
| errors.EditReadingDateResponseBodyError3 | 422                                      | application/json                         |
| errors.TooManyRequestsError              | 429                                      | application/json                         |
| errors.VerseDbDefaultError               | 4XX, 5XX                                 | \*/\*                                    |

## addToWishlist

Adds the issue to the authenticated user's wishlist. Idempotent: calling
with an issue already on the wishlist returns 200 without creating a duplicate.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addToWishlist" method="post" path="/api/v1/issues/{issue_id}/wishlist" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.addToWishlist({
    issueId: 5432,
    body: {
      variantId: 7,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userAddToWishlist } from "@versedbcom/sdk/funcs/user-add-to-wishlist.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userAddToWishlist(verseDB, {
    issueId: 5432,
    body: {
      variantId: 7,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAddToWishlist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddToWishlistRequest](../../models/operations/add-to-wishlist-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddToWishlistResponse](../../models/operations/add-to-wishlist-response.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.UnauthorizedErrorError          | 401                                    | application/json                       |
| errors.AddToWishlistForbiddenError     | 403                                    | application/json                       |
| errors.AddToWishlistNotFoundError      | 404                                    | application/json                       |
| errors.AddToWishlistResponseBodyError1 | 422                                    | application/json                       |
| errors.AddToWishlistResponseBodyError2 | 422                                    | application/json                       |
| errors.TooManyRequestsError            | 429                                    | application/json                       |
| errors.VerseDbDefaultError             | 4XX, 5XX                               | \*/\*                                  |

## removeFromWishlist

Removes the issue from the authenticated user's wishlist. Idempotent:
returns 204 whether or not the issue was on the wishlist.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeFromWishlist" method="delete" path="/api/v1/issues/{issue_id}/wishlist" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.removeFromWishlist({
    issueId: 5432,
    variantId: 7,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userRemoveFromWishlist } from "@versedbcom/sdk/funcs/user-remove-from-wishlist.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userRemoveFromWishlist(verseDB, {
    issueId: 5432,
    variantId: 7,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userRemoveFromWishlist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveFromWishlistRequest](../../models/operations/remove-from-wishlist-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveFromWishlistResponse](../../models/operations/remove-from-wishlist-response.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.UnauthorizedErrorError                     | 401                                               | application/json                                  |
| errors.RemoveFromWishlistForbiddenError           | 403                                               | application/json                                  |
| errors.RemoveFromWishlistNotFoundError            | 404                                               | application/json                                  |
| errors.RemoveFromWishlistUnprocessableEntityError | 422                                               | application/json                                  |
| errors.TooManyRequestsError                       | 429                                               | application/json                                  |
| errors.VerseDbDefaultError                        | 4XX, 5XX                                          | \*/\*                                             |

## addToPullList

Adds a series to the user's pull list to track new releases. Adding a series already on it changes nothing.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addToPullList" method="post" path="/api/v1/pull-list/items" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.addToPullList({
    seriesId: 456,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userAddToPullList } from "@versedbcom/sdk/funcs/user-add-to-pull-list.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userAddToPullList(verseDB, {
    seriesId: 456,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAddToPullList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddToPullListRequest](../../models/operations/add-to-pull-list-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddToPullListResponse](../../models/operations/add-to-pull-list-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.UnauthorizedErrorError                | 401                                          | application/json                             |
| errors.AddToPullListForbiddenError           | 403                                          | application/json                             |
| errors.AddToPullListNotFoundError            | 404                                          | application/json                             |
| errors.AddToPullListUnprocessableEntityError | 422                                          | application/json                             |
| errors.TooManyRequestsError                  | 429                                          | application/json                             |
| errors.VerseDbDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |

## removeFromPullList

Removes a series from the authenticated user's pull list. Idempotent: returns 204 whether or not the series was on it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeFromPullList" method="delete" path="/api/v1/pull-list/items/{item_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.removeFromPullList({
    itemId: 456,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userRemoveFromPullList } from "@versedbcom/sdk/funcs/user-remove-from-pull-list.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userRemoveFromPullList(verseDB, {
    itemId: 456,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userRemoveFromPullList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveFromPullListRequest](../../models/operations/remove-from-pull-list-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveFromPullListResponse](../../models/operations/remove-from-pull-list-response.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UnauthorizedErrorError           | 401                                     | application/json                        |
| errors.RemoveFromPullListForbiddenError | 403                                     | application/json                        |
| errors.RemoveFromPullListNotFoundError  | 404                                     | application/json                        |
| errors.TooManyRequestsError             | 429                                     | application/json                        |
| errors.VerseDbDefaultError              | 4XX, 5XX                                | \*/\*                                   |

## addIssueToCollection

Adds a copy of the issue to the user's collection; every field is optional. When the issue was on the user's wishlist it comes off when the user chose that, else `was_on_wishlist` is true so the app can offer it. `follow_up` says whether to offer marking it read or reviewing it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addIssueToCollection" method="post" path="/api/v1/issues/{issue_id}/collection" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.addIssueToCollection({
    issueId: 5432,
    body: {
      variantId: 789,
      condition: "NM",
      notes: "First print, signed",
      pricePaid: 4.99,
      format: "standard",
      purchaseSource: "comic_shop",
      purchaseStore: "Third Eye Comics",
      customLabel: "Longbox A / row 3",
      baggedAt: "2024-07-01",
      personalRating: 4.5,
      tags: [
        "b",
      ],
      comicShopId: 412,
      acquisitionMethod: "purchase",
      purchasedAt: "2024-06-15",
      storageLocation: "Long box #3",
      isSigned: false,
      signedBy: "Stan Lee",
      isVariant: false,
      variantDescription: "b",
      variantType: "ratio_variant",
      graded: false,
      gradeScore: "9.8",
      gradingCompany: "CGC",
      gradingNumber: "1234567890",
      labelType: "universal",
      pageQuality: "white",
      graderNotes: "Marvel Value Stamp #16 intact",
      printNumber: "7th",
      signatureWitness: "CBCS",
      estimatedValue: 25,
      forSale: false,
      status: "sold",
      soldAt: "2026-08-14",
      priceSold: 40,
      forTrade: false,
      isPublic: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userAddIssueToCollection } from "@versedbcom/sdk/funcs/user-add-issue-to-collection.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userAddIssueToCollection(verseDB, {
    issueId: 5432,
    body: {
      variantId: 789,
      condition: "NM",
      notes: "First print, signed",
      pricePaid: 4.99,
      format: "standard",
      purchaseSource: "comic_shop",
      purchaseStore: "Third Eye Comics",
      customLabel: "Longbox A / row 3",
      baggedAt: "2024-07-01",
      personalRating: 4.5,
      tags: [
        "b",
      ],
      comicShopId: 412,
      acquisitionMethod: "purchase",
      purchasedAt: "2024-06-15",
      storageLocation: "Long box #3",
      isSigned: false,
      signedBy: "Stan Lee",
      isVariant: false,
      variantDescription: "b",
      variantType: "ratio_variant",
      graded: false,
      gradeScore: "9.8",
      gradingCompany: "CGC",
      gradingNumber: "1234567890",
      labelType: "universal",
      pageQuality: "white",
      graderNotes: "Marvel Value Stamp #16 intact",
      printNumber: "7th",
      signatureWitness: "CBCS",
      estimatedValue: 25,
      forSale: false,
      status: "sold",
      soldAt: "2026-08-14",
      priceSold: 40,
      forTrade: false,
      isPublic: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAddIssueToCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddIssueToCollectionRequest](../../models/operations/add-issue-to-collection-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddIssueToCollectionResponse](../../models/operations/add-issue-to-collection-response.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.UnauthorizedErrorError                 | 401                                           | application/json                              |
| errors.AddIssueToCollectionForbiddenError     | 403                                           | application/json                              |
| errors.AddIssueToCollectionNotFoundError      | 404                                           | application/json                              |
| errors.AddIssueToCollectionResponseBodyError1 | 422                                           | application/json                              |
| errors.AddIssueToCollectionResponseBodyError2 | 422                                           | application/json                              |
| errors.AddIssueToCollectionResponseBodyError3 | 422                                           | application/json                              |
| errors.TooManyRequestsError                   | 429                                           | application/json                              |
| errors.VerseDbDefaultError                    | 4XX, 5XX                                      | \*/\*                                         |

## removeIssueFromCollection

Removes one of the user's copies of the issue: the copy `collection_item_id` names, else the oldest copy (of `variant_id`'s cover when one is sent). Each may come in the query or the body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeIssueFromCollection" method="delete" path="/api/v1/issues/{issue_id}/collection" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.removeIssueFromCollection({
    issueId: 5432,
    variantId: 789,
    collectionItemId: 1001,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userRemoveIssueFromCollection } from "@versedbcom/sdk/funcs/user-remove-issue-from-collection.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userRemoveIssueFromCollection(verseDB, {
    issueId: 5432,
    variantId: 789,
    collectionItemId: 1001,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userRemoveIssueFromCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveIssueFromCollectionRequest](../../models/operations/remove-issue-from-collection-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveIssueFromCollectionResponse](../../models/operations/remove-issue-from-collection-response.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.UnauthorizedErrorError                            | 401                                                      | application/json                                         |
| errors.RemoveIssueFromCollectionForbiddenError           | 403                                                      | application/json                                         |
| errors.RemoveIssueFromCollectionResponseBodyError1       | 404                                                      | application/json                                         |
| errors.RemoveIssueFromCollectionResponseBodyError2       | 404                                                      | application/json                                         |
| errors.RemoveIssueFromCollectionUnprocessableEntityError | 422                                                      | application/json                                         |
| errors.TooManyRequestsError                              | 429                                                      | application/json                                         |
| errors.VerseDbDefaultError                               | 4XX, 5XX                                                 | \*/\*                                                    |

## updateCollectionItem

Updates one of the user's copies of the issue: the copy `collection_item_id` names (query or body), else the oldest copy (of the query's `variant_id` cover when one is sent). Only the fields sent change; `tags` replaces the copy's tags. `is_read` and `read_at` set the issue's read status too.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCollectionItem" method="patch" path="/api/v1/issues/{issue_id}/collection" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.updateCollectionItem({
    issueId: 5432,
    variantId: 789,
    collectionItemId: 1001,
    body: {
      variantId: 42,
      condition: "NM",
      notes: "First print, great condition",
      pricePaid: 3.99,
      format: "standard",
      purchaseSource: "comic_shop",
      purchaseStore: "Third Eye Comics",
      customLabel: "Longbox A / row 3",
      baggedAt: "2024-07-01",
      personalRating: 4.5,
      tags: [
        "b",
      ],
      comicShopId: 412,
      acquisitionMethod: "purchase",
      purchasedAt: "2024-06-15",
      storageLocation: "Long box #3",
      isSigned: false,
      signedBy: "Stan Lee",
      isVariant: true,
      variantDescription: "b",
      variantType: "facsimile",
      graded: false,
      gradeScore: "9.8",
      gradingCompany: "CGC",
      gradingNumber: "1234567890",
      labelType: "universal",
      pageQuality: "white",
      graderNotes: "Marvel Value Stamp #16 intact",
      printNumber: "10th",
      signatureWitness: "JSA",
      estimatedValue: 25,
      forSale: false,
      status: "sold",
      soldAt: "2026-08-14",
      priceSold: 40,
      forTrade: false,
      isPublic: true,
      isRead: true,
      readAt: "2024-06-15",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userUpdateCollectionItem } from "@versedbcom/sdk/funcs/user-update-collection-item.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userUpdateCollectionItem(verseDB, {
    issueId: 5432,
    variantId: 789,
    collectionItemId: 1001,
    body: {
      variantId: 42,
      condition: "NM",
      notes: "First print, great condition",
      pricePaid: 3.99,
      format: "standard",
      purchaseSource: "comic_shop",
      purchaseStore: "Third Eye Comics",
      customLabel: "Longbox A / row 3",
      baggedAt: "2024-07-01",
      personalRating: 4.5,
      tags: [
        "b",
      ],
      comicShopId: 412,
      acquisitionMethod: "purchase",
      purchasedAt: "2024-06-15",
      storageLocation: "Long box #3",
      isSigned: false,
      signedBy: "Stan Lee",
      isVariant: true,
      variantDescription: "b",
      variantType: "facsimile",
      graded: false,
      gradeScore: "9.8",
      gradingCompany: "CGC",
      gradingNumber: "1234567890",
      labelType: "universal",
      pageQuality: "white",
      graderNotes: "Marvel Value Stamp #16 intact",
      printNumber: "10th",
      signatureWitness: "JSA",
      estimatedValue: 25,
      forSale: false,
      status: "sold",
      soldAt: "2026-08-14",
      priceSold: 40,
      forTrade: false,
      isPublic: true,
      isRead: true,
      readAt: "2024-06-15",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userUpdateCollectionItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCollectionItemRequest](../../models/operations/update-collection-item-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateCollectionItemResponse](../../models/operations/update-collection-item-response.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.UnauthorizedErrorError                                    | 401                                                              | application/json                                                 |
| errors.UpdateCollectionItemForbiddenError                        | 403                                                              | application/json                                                 |
| errors.UpdateCollectionItemResponseBodyNotFoundError1            | 404                                                              | application/json                                                 |
| errors.UpdateCollectionItemResponseBodyNotFoundError2            | 404                                                              | application/json                                                 |
| errors.UpdateCollectionItemResponseBodyUnprocessableEntityError1 | 422                                                              | application/json                                                 |
| errors.UpdateCollectionItemResponseBodyUnprocessableEntityError2 | 422                                                              | application/json                                                 |
| errors.UpdateCollectionItemResponseBodyUnprocessableEntityError3 | 422                                                              | application/json                                                 |
| errors.TooManyRequestsError                                      | 429                                                              | application/json                                                 |
| errors.VerseDbDefaultError                                       | 4XX, 5XX                                                         | \*/\*                                                            |

## lendACopyOut

Records that one of the user's copies is out on loan. A copy already out is a 409 rather than a replacement: mark it returned, then lend it again.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lendACopyOut" method="post" path="/api/v1/user/collections/{collection_item_id}/loan" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.lendACopyOut({
    collectionItemId: 1001,
    body: {
      loanedTo: "Dan from the shop",
      loanedAt: "2026-09-01",
      dueAt: "2026-10-01",
      notes: "Lent at the Saturday meetup",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userLendACopyOut } from "@versedbcom/sdk/funcs/user-lend-a-copy-out.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userLendACopyOut(verseDB, {
    collectionItemId: 1001,
    body: {
      loanedTo: "Dan from the shop",
      loanedAt: "2026-09-01",
      dueAt: "2026-10-01",
      notes: "Lent at the Saturday meetup",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userLendACopyOut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LendACopyOutRequest](../../models/operations/lend-a-copy-out-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LendACopyOutResponse](../../models/operations/lend-a-copy-out-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.UnauthorizedErrorError               | 401                                         | application/json                            |
| errors.LendACopyOutForbiddenError           | 403                                         | application/json                            |
| errors.LendACopyOutNotFoundError            | 404                                         | application/json                            |
| errors.LendACopyOutConflictError            | 409                                         | application/json                            |
| errors.LendACopyOutUnprocessableEntityError | 422                                         | application/json                            |
| errors.TooManyRequestsError                 | 429                                         | application/json                            |
| errors.VerseDbDefaultError                  | 4XX, 5XX                                    | \*/\*                                       |

## markTheCopysOpenLoanReturned

Closes the copy's open loan. A copy with no open loan is a 404, so a repeat call does not silently succeed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="markTheCopysOpenLoanReturned" method="delete" path="/api/v1/user/collections/{collection_item_id}/loan" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.markTheCopysOpenLoanReturned({
    collectionItemId: 1001,
    body: {
      returnedAt: "2026-09-20",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userMarkTheCopysOpenLoanReturned } from "@versedbcom/sdk/funcs/user-mark-the-copys-open-loan-returned.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userMarkTheCopysOpenLoanReturned(verseDB, {
    collectionItemId: 1001,
    body: {
      returnedAt: "2026-09-20",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userMarkTheCopysOpenLoanReturned failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MarkTheCopysOpenLoanReturnedRequest](../../models/operations/mark-the-copys-open-loan-returned-request.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MarkTheCopysOpenLoanReturnedResponse](../../models/operations/mark-the-copys-open-loan-returned-response.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.UnauthorizedErrorError                               | 401                                                         | application/json                                            |
| errors.MarkTheCopysOpenLoanReturnedForbiddenError           | 403                                                         | application/json                                            |
| errors.MarkTheCopysOpenLoanReturnedNotFoundError            | 404                                                         | application/json                                            |
| errors.MarkTheCopysOpenLoanReturnedUnprocessableEntityError | 422                                                         | application/json                                            |
| errors.TooManyRequestsError                                 | 429                                                         | application/json                                            |
| errors.VerseDbDefaultError                                  | 4XX, 5XX                                                    | \*/\*                                                       |

## listFollows

Returns all entities the user is following (titles, characters, podcasts, etc.).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFollows" method="get" path="/api/v1/user/follows" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.listFollows({
    perPage: 20,
    type: "Character",
    q: "spider",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userListFollows } from "@versedbcom/sdk/funcs/user-list-follows.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userListFollows(verseDB, {
    perPage: 20,
    type: "Character",
    q: "spider",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userListFollows failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFollowsRequest](../../models/operations/list-follows-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListFollowsResponse](../../models/operations/list-follows-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorError | 401                           | application/json              |
| errors.TooManyRequestsError   | 429                           | application/json              |
| errors.VerseDbDefaultError    | 4XX, 5XX                      | \*/\*                         |

## checkFollowStatus

Reports whether the authenticated user currently follows the given entity.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="checkFollowStatus" method="get" path="/api/v1/follow/{type}/{id}/check" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.checkFollowStatus({
    type: "title",
    id: 45,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userCheckFollowStatus } from "@versedbcom/sdk/funcs/user-check-follow-status.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userCheckFollowStatus(verseDB, {
    type: "title",
    id: 45,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCheckFollowStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CheckFollowStatusRequest](../../models/operations/check-follow-status-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CheckFollowStatusResponse](../../models/operations/check-follow-status-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorError | 401                           | application/json              |
| errors.TooManyRequestsError   | 429                           | application/json              |
| errors.VerseDbDefaultError    | 4XX, 5XX                      | \*/\*                         |

## followContent

Follows a title, character, podcast, creator, publisher, team, story arc, comic shop, event, event franchise, or user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="followContent" method="post" path="/api/v1/follow" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.followContent({
    type: "title",
    id: 45,
    preferences: {
      emailNotifications: true,
      pushNotifications: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userFollowContent } from "@versedbcom/sdk/funcs/user-follow-content.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userFollowContent(verseDB, {
    type: "title",
    id: 45,
    preferences: {
      emailNotifications: true,
      pushNotifications: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userFollowContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FollowContentRequest](../../models/operations/follow-content-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FollowContentResponse](../../models/operations/follow-content-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.UnauthorizedErrorError      | 401                                | application/json                   |
| errors.FollowContentForbiddenError | 403                                | application/json                   |
| errors.FollowContentNotFoundError  | 404                                | application/json                   |
| errors.TooManyRequestsError        | 429                                | application/json                   |
| errors.VerseDbDefaultError         | 4XX, 5XX                           | \*/\*                              |

## unfollowContent

Stops following the given entity for the authenticated user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unfollowContent" method="delete" path="/api/v1/follow/{type}/{id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.unfollowContent({
    type: "title",
    id: 45,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userUnfollowContent } from "@versedbcom/sdk/funcs/user-unfollow-content.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userUnfollowContent(verseDB, {
    type: "title",
    id: 45,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userUnfollowContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnfollowContentRequest](../../models/operations/unfollow-content-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnfollowContentResponse](../../models/operations/unfollow-content-response.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.UnauthorizedErrorError       | 401                                 | application/json                    |
| errors.UnfollowContentNotFoundError | 404                                 | application/json                    |
| errors.TooManyRequestsError         | 429                                 | application/json                    |
| errors.VerseDbDefaultError          | 4XX, 5XX                            | \*/\*                               |

## ~~getActivityFeed~~

Aggregates recent activity from collections, reads, follows, and reviews.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getActivityFeed" method="get" path="/api/v1/user/activity" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.getActivityFeed({
    perPage: 20,
    page: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userGetActivityFeed } from "@versedbcom/sdk/funcs/user-get-activity-feed.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userGetActivityFeed(verseDB, {
    perPage: 20,
    page: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGetActivityFeed failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetActivityFeedRequest](../../models/operations/get-activity-feed-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetActivityFeedResponse](../../models/operations/get-activity-feed-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorError | 401                           | application/json              |
| errors.TooManyRequestsError   | 429                           | application/json              |
| errors.VerseDbDefaultError    | 4XX, 5XX                      | \*/\*                         |