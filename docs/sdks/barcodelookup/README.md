# BarcodeLookup

## Overview


Endpoints for looking up comics by barcode (UPC or ISBN) or by a distributor's
order code (Lunar or Universal). Used by the mobile app's barcode scanning feature
and exposed to User API tokens via the `lookup:barcode` ability.

On the Mobile API the GET lookups sit on the App Clip mode of the first-party
door: a signed-in session gets the full payload, and the App Clip, which has no
account, gets the preview payload with its attested clip token (#3044). On the
public User API they require the `lookup:barcode` token ability, and carry no
market quote.

### Available Operations

* [lookupByUPC](#lookupbyupc) - Lookup by UPC.
* [lookupByISBN](#lookupbyisbn) - Lookup by ISBN.
* [lookupByDistributorCode](#lookupbydistributorcode) - Lookup by distributor code.

## lookupByUPC

Find an issue by its UPC barcode (typically 12-17 digits).
Returns full issue details including series information.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lookupByUPC" method="get" path="/api/v1/lookup/upc/{upc}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.barcodeLookup.lookupByUPC({
    upc: "75960608936700111",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { barcodeLookupLookupByUPC } from "@versedbcom/sdk/funcs/barcode-lookup-lookup-by-upc.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await barcodeLookupLookupByUPC(verseDB, {
    upc: "75960608936700111",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("barcodeLookupLookupByUPC failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LookupByUPCRequest](../../models/operations/lookup-by-upc-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LookupByUPCResponse](../../models/operations/lookup-by-upc-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.UnauthorizedErrorError    | 401                              | application/json                 |
| errors.LookupByUPCForbiddenError | 403                              | application/json                 |
| errors.LookupByUPCNotFoundError  | 404                              | application/json                 |
| errors.LookupByUPCConflictError  | 409                              | application/json                 |
| errors.TooManyRequestsError      | 429                              | application/json                 |
| errors.VerseDbDefaultError       | 4XX, 5XX                         | \*/\*                            |

## lookupByISBN

Find an issue by its ISBN (10 or 13 digits, with or without dashes).
Commonly used for trade paperbacks and hardcovers.
Returns full issue details including series information.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lookupByISBN" method="get" path="/api/v1/lookup/isbn/{isbn}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.barcodeLookup.lookupByISBN({
    isbn: "978-1302913847",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { barcodeLookupLookupByISBN } from "@versedbcom/sdk/funcs/barcode-lookup-lookup-by-isbn.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await barcodeLookupLookupByISBN(verseDB, {
    isbn: "978-1302913847",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("barcodeLookupLookupByISBN failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LookupByISBNRequest](../../models/operations/lookup-by-isbn-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LookupByISBNResponse](../../models/operations/lookup-by-isbn-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.UnauthorizedErrorError     | 401                               | application/json                  |
| errors.LookupByISBNForbiddenError | 403                               | application/json                  |
| errors.LookupByISBNNotFoundError  | 404                               | application/json                  |
| errors.TooManyRequestsError       | 429                               | application/json                  |
| errors.VerseDbDefaultError        | 4XX, 5XX                          | \*/\*                             |

## lookupByDistributorCode

Find an issue by its distributor order code: a Lunar code (like `0126IM0451`) or a
Universal code (like `DC10251016`), in any case. A variant's own code finds its issue,
and `suggested_variant_id` then names that variant. The payload matches the UPC lookup:
one issue returns 200, a code held by several issues returns 409 with the candidates.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lookupByDistributorCode" method="get" path="/api/v1/lookup/code/{code}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.barcodeLookup.lookupByDistributorCode({
    code: "1125DC0151",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { barcodeLookupLookupByDistributorCode } from "@versedbcom/sdk/funcs/barcode-lookup-lookup-by-distributor-code.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await barcodeLookupLookupByDistributorCode(verseDB, {
    code: "1125DC0151",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("barcodeLookupLookupByDistributorCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LookupByDistributorCodeRequest](../../models/operations/lookup-by-distributor-code-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LookupByDistributorCodeResponse](../../models/operations/lookup-by-distributor-code-response.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.UnauthorizedErrorError                          | 401                                                    | application/json                                       |
| errors.LookupByDistributorCodeForbiddenError           | 403                                                    | application/json                                       |
| errors.LookupByDistributorCodeNotFoundError            | 404                                                    | application/json                                       |
| errors.LookupByDistributorCodeConflictError            | 409                                                    | application/json                                       |
| errors.LookupByDistributorCodeUnprocessableEntityError | 422                                                    | application/json                                       |
| errors.TooManyRequestsError                            | 429                                                    | application/json                                       |
| errors.VerseDbDefaultError                             | 4XX, 5XX                                               | \*/\*                                                  |