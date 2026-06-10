# Market

## Overview


Market data and pricing information for comic issues.

Includes live marketplace listings, verified sales history, price snapshots, and estimated values.

Mobile: only price snapshots require PRO. User API: all endpoints PRO-gated by route middleware.

### Available Operations

* [liveListings](#livelistings) - Live listings.
* [getAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview](#getallpricesnapshotsforallgradesofanissueforpricingoverview) - Get all price snapshots for all grades of an issue (for pricing overview).
* [submitAMarketSale](#submitamarketsale) - Submit a market sale.

## liveListings

Returns current marketplace listings for an issue from supported platforms.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="liveListings" method="get" path="/api/v1/issues/{issue_id}/market/listings" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.market.liveListings({
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
import { marketLiveListings } from "@versedbcom/sdk/funcs/market-live-listings.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketLiveListings(verseDB, {
    issueId: 5432,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketLiveListings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LiveListingsRequest](../../models/operations/live-listings-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LiveListingsResponse](../../models/operations/live-listings-response.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.LiveListingsUnauthorizedError    | 401                                     | application/json                        |
| errors.LiveListingsNotFoundError        | 404                                     | application/json                        |
| errors.LiveListingsTooManyRequestsError | 429                                     | application/json                        |
| errors.VerseDbDefaultError              | 4XX, 5XX                                | \*/\*                                   |

## getAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview

Non-PRO callers get only `meta.price_estimates.mid`; PRO callers also
get `low`, `high`, and `price_trend`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview" method="get" path="/api/v1/issues/{issue_id}/market/overview" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.market.getAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview({
    issueId: 3,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { marketGetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview } from "@versedbcom/sdk/funcs/market-get-all-price-snapshots-for-all-grades-of-an-issuefor-pricing-overview.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketGetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview(verseDB, {
    issueId: 3,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketGetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewRequest](../../models/operations/get-all-price-snapshots-for-all-grades-of-an-issuefor-pricing-overview-request.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[operations.GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewResponse](../../models/operations/get-all-price-snapshots-for-all-grades-of-an-issuefor-pricing-overview-response.md)\>**

### Errors

| Error Type                                                                             | Status Code                                                                            | Content Type                                                                           |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| errors.GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewUnauthorizedError    | 401                                                                                    | application/json                                                                       |
| errors.GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewTooManyRequestsError | 429                                                                                    | application/json                                                                       |
| errors.VerseDbDefaultError                                                             | 4XX, 5XX                                                                               | \*/\*                                                                                  |

## submitAMarketSale

Submits a sold-copy record for an issue. Submissions enter a moderation queue before
appearing in price history.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="submitAMarketSale" method="post" path="/api/v1/issues/{issue_id}/market/sales" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.market.submitAMarketSale({
    issueId: 5432,
    body: {
      provider: "ebay",
      externalListingId: "256789012345",
      soldAt: "2026-05-01",
      price: 49.99,
      currency: "USD",
      gradeType: "cgc",
      gradeValue: 9.8,
      gradeLabel: "NM/M",
      sourceUrl: "https://www.ebay.com/itm/256789012345",
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
import { marketSubmitAMarketSale } from "@versedbcom/sdk/funcs/market-submit-a-market-sale.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await marketSubmitAMarketSale(verseDB, {
    issueId: 5432,
    body: {
      provider: "ebay",
      externalListingId: "256789012345",
      soldAt: "2026-05-01",
      price: 49.99,
      currency: "USD",
      gradeType: "cgc",
      gradeValue: 9.8,
      gradeLabel: "NM/M",
      sourceUrl: "https://www.ebay.com/itm/256789012345",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketSubmitAMarketSale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubmitAMarketSaleRequest](../../models/operations/submit-a-market-sale-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubmitAMarketSaleResponse](../../models/operations/submit-a-market-sale-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.SubmitAMarketSaleUnauthorizedError    | 401                                          | application/json                             |
| errors.SubmitAMarketSaleConflictError        | 409                                          | application/json                             |
| errors.SubmitAMarketSaleTooManyRequestsError | 429                                          | application/json                             |
| errors.VerseDbDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |