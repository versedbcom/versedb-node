# UserCollections

## Overview


Endpoints for managing the authenticated user's comic collection, statistics, and exports.

All endpoints in this group require authentication via a mobile session token.

### Available Operations

* [listCollection](#listcollection) - List collection.
* [addIssueToCollection](#addissuetocollection) - Add issue to collection.
* [updateCollectionItem](#updatecollectionitem) - Update collection item.
* [removeIssueFromCollection](#removeissuefromcollection) - Remove issue from collection.

## listCollection

Returns all issues in the user's collection with series and publisher info.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCollection" method="get" path="/api/v1/user/collections" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.userCollections.listCollection({
    perPage: 20,
    page: 1,
    search: "spider",
    format: "single",
    graded: true,
    isSigned: true,
    condition: "NM",
    forSale: true,
    forTrade: true,
    readStatus: "unread",
    publisherId: 1,
    gradeMin: 9,
    gradeMax: 9.8,
    sortBy: "title",
    sortOrder: "asc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { userCollectionsListCollection } from "@versedbcom/sdk/funcs/user-collections-list-collection.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userCollectionsListCollection(verseDB, {
    perPage: 20,
    page: 1,
    search: "spider",
    format: "single",
    graded: true,
    isSigned: true,
    condition: "NM",
    forSale: true,
    forTrade: true,
    readStatus: "unread",
    publisherId: 1,
    gradeMin: 9,
    gradeMax: 9.8,
    sortBy: "title",
    sortOrder: "asc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCollectionsListCollection failed:", res.error);
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

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.ListCollectionUnauthorizedError    | 401                                       | application/json                          |
| errors.ListCollectionTooManyRequestsError | 429                                       | application/json                          |
| errors.VerseDbDefaultError                | 4XX, 5XX                                  | \*/\*                                     |

## addIssueToCollection

Adds an issue to the user's default collection. Works for all users (no PRO required).
This is the recommended endpoint for mobile collection management.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addIssueToCollection" method="post" path="/api/v1/issues/{issue_id}/collection" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.userCollections.addIssueToCollection({
    issueId: 5432,
    body: {
      variantId: 789,
      condition: "NM",
      notes: "First print, signed",
      pricePaid: 4.99,
      format: "standard",
      purchaseSource: "comic_shop",
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
import { userCollectionsAddIssueToCollection } from "@versedbcom/sdk/funcs/user-collections-add-issue-to-collection.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userCollectionsAddIssueToCollection(verseDB, {
    issueId: 5432,
    body: {
      variantId: 789,
      condition: "NM",
      notes: "First print, signed",
      pricePaid: 4.99,
      format: "standard",
      purchaseSource: "comic_shop",
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
      forTrade: false,
      isPublic: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCollectionsAddIssueToCollection failed:", res.error);
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

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.AddIssueToCollectionUnauthorizedError        | 401                                                 | application/json                                    |
| errors.AddIssueToCollectionForbiddenError           | 403                                                 | application/json                                    |
| errors.AddIssueToCollectionUnprocessableEntityError | 422                                                 | application/json                                    |
| errors.AddIssueToCollectionTooManyRequestsError     | 429                                                 | application/json                                    |
| errors.VerseDbDefaultError                          | 4XX, 5XX                                            | \*/\*                                               |

## updateCollectionItem

Updates metadata on an existing collection entry for an issue.
Supports partial updates — only send the fields you want to change.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCollectionItem" method="patch" path="/api/v1/issues/{issue_id}/collection" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.userCollections.updateCollectionItem({
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
import { userCollectionsUpdateCollectionItem } from "@versedbcom/sdk/funcs/user-collections-update-collection-item.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userCollectionsUpdateCollectionItem(verseDB, {
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
    console.log("userCollectionsUpdateCollectionItem failed:", res.error);
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

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.UpdateCollectionItemUnauthorizedError    | 401                                             | application/json                                |
| errors.UpdateCollectionItemNotFoundError        | 404                                             | application/json                                |
| errors.UpdateCollectionItemTooManyRequestsError | 429                                             | application/json                                |
| errors.VerseDbDefaultError                      | 4XX, 5XX                                        | \*/\*                                           |

## removeIssueFromCollection

Removes an issue (optionally a specific variant) from the user's collection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeIssueFromCollection" method="delete" path="/api/v1/issues/{issue_id}/collection" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.userCollections.removeIssueFromCollection({
    issueId: 5432,
    variantId: 789,
    collectionItemId: 1001,
    body: {
      variantId: null,
      collectionItemId: 16,
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
import { userCollectionsRemoveIssueFromCollection } from "@versedbcom/sdk/funcs/user-collections-remove-issue-from-collection.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await userCollectionsRemoveIssueFromCollection(verseDB, {
    issueId: 5432,
    variantId: 789,
    collectionItemId: 1001,
    body: {
      variantId: null,
      collectionItemId: 16,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCollectionsRemoveIssueFromCollection failed:", res.error);
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

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.RemoveIssueFromCollectionUnauthorizedError    | 401                                                  | application/json                                     |
| errors.RemoveIssueFromCollectionNotFoundError        | 404                                                  | application/json                                     |
| errors.RemoveIssueFromCollectionTooManyRequestsError | 429                                                  | application/json                                     |
| errors.VerseDbDefaultError                           | 4XX, 5XX                                             | \*/\*                                                |