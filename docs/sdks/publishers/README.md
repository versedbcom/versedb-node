# Publishers

## Overview


Endpoints for browsing comic book publishers.

### Available Operations

* [listAllPublishersWithOptionalSearch](#listallpublisherswithoptionalsearch) - List all publishers with optional search
* [getPublisherDetails](#getpublisherdetails) - Get publisher details

## listAllPublishersWithOptionalSearch

Returns: id, name, slug, founded_year, headquarters, status, logo_url

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAllPublishersWithOptionalSearch" method="get" path="/api/v1/publishers" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.publishers.listAllPublishersWithOptionalSearch({
    q: "marvel",
    limit: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { publishersListAllPublishersWithOptionalSearch } from "@versedbcom/sdk/funcs/publishers-list-all-publishers-with-optional-search.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await publishersListAllPublishersWithOptionalSearch(verseDB, {
    q: "marvel",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publishersListAllPublishersWithOptionalSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllPublishersWithOptionalSearchRequest](../../models/operations/list-all-publishers-with-optional-search-request.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllPublishersWithOptionalSearchResponse](../../models/operations/list-all-publishers-with-optional-search-response.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ListAllPublishersWithOptionalSearchUnauthorizedError    | 401                                                            | application/json                                               |
| errors.ListAllPublishersWithOptionalSearchTooManyRequestsError | 429                                                            | application/json                                               |
| errors.VerseDbDefaultError                                     | 4XX, 5XX                                                       | \*/\*                                                          |

## getPublisherDetails

Returns: id, name, slug, description, founded_year, first_published_year,
website, email, headquarters, parent_company, status, logo_url, aliases,
titles_count, series_count, issues_count, characters_count

Use the related endpoints for relationship data:
- /series?publisher_id={id} - Get series by publisher
- /publishers/{id}/characters - Get characters by publisher

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPublisherDetails" method="get" path="/api/v1/publishers/{publisher_id}" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.publishers.getPublisherDetails({
    publisherId: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { publishersGetPublisherDetails } from "@versedbcom/sdk/funcs/publishers-get-publisher-details.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await publishersGetPublisherDetails(verseDB, {
    publisherId: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publishersGetPublisherDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublisherDetailsRequest](../../models/operations/get-publisher-details-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublisherDetailsResponse](../../models/operations/get-publisher-details-response.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.GetPublisherDetailsUnauthorizedError    | 401                                            | application/json                               |
| errors.GetPublisherDetailsTooManyRequestsError | 429                                            | application/json                               |
| errors.VerseDbDefaultError                     | 4XX, 5XX                                       | \*/\*                                          |