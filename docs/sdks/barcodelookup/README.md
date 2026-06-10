# BarcodeLookup

## Overview


Endpoints for looking up comics by barcode (UPC or ISBN).
Used by the mobile app's barcode scanning feature and exposed
to User API tokens via the `lookup:barcode` ability.

Requires the `mobile:lookup` or `lookup:barcode` token ability.

### Available Operations

* [lookupByUPC](#lookupbyupc) - Lookup by UPC.
* [lookupByISBN](#lookupbyisbn) - Lookup by ISBN.

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

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.LookupByUPCUnauthorizedError    | 401                                    | application/json                       |
| errors.LookupByUPCForbiddenError       | 403                                    | application/json                       |
| errors.LookupByUPCNotFoundError        | 404                                    | application/json                       |
| errors.LookupByUPCConflictError        | 409                                    | application/json                       |
| errors.LookupByUPCTooManyRequestsError | 429                                    | application/json                       |
| errors.VerseDbDefaultError             | 4XX, 5XX                               | \*/\*                                  |

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

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.LookupByISBNUnauthorizedError    | 401                                     | application/json                        |
| errors.LookupByISBNForbiddenError       | 403                                     | application/json                        |
| errors.LookupByISBNNotFoundError        | 404                                     | application/json                        |
| errors.LookupByISBNTooManyRequestsError | 429                                     | application/json                        |
| errors.VerseDbDefaultError              | 4XX, 5XX                                | \*/\*                                   |