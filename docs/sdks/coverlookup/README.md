# CoverLookup

## Overview


Identify a comic from a photo of its cover. The photo is matched by image against every cover
in the catalog (issues and variants), and the answer is catalog ids. No cover image is stored,
and none comes back beyond the cover URLs the issue resource already carries.

### Available Operations

* [lookUpAnIssueByCoverPhoto](#lookupanissuebycoverphoto) - Look up an issue by cover photo.

## lookUpAnIssueByCoverPhoto

Upload a photo of a comic cover (bare, bagged or slabbed) as `image`. `clear_match` true means
the image match is sure of the issue: `issue_id` is it, and `variant_id` is the cover when the
match also settled which of the issue's covers it is (null is the issue's own cover, or a cover
it could not tell apart from a same-art sibling such as a newsstand edition). `clear_match`
false means the image was not sure: `issue_id` is null and `candidates` lists up to five
issues it could be, best first, each at its best-scoring cover. Only the image is compared;
no text is read off the cover, so a slab label's grade is not returned. Requires the
`read:public` scope. Rate limited separately from catalog reads: 5/min and 100/day, or
15/min and 500/day on PRO.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lookUpAnIssueByCoverPhoto" method="post" path="/api/v1/lookup/cover" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";
import { openAsBlob } from "node:fs";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.coverLookup.lookUpAnIssueByCoverPhoto({
    image: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { coverLookupLookUpAnIssueByCoverPhoto } from "@versedbcom/sdk/funcs/cover-lookup-look-up-an-issue-by-cover-photo.js";
import { openAsBlob } from "node:fs";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await coverLookupLookUpAnIssueByCoverPhoto(verseDB, {
    image: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("coverLookupLookUpAnIssueByCoverPhoto failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LookUpAnIssueByCoverPhotoRequest](../../models/operations/look-up-an-issue-by-cover-photo-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LookUpAnIssueByCoverPhotoResponse](../../models/operations/look-up-an-issue-by-cover-photo-response.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.UnauthorizedErrorError                            | 401                                                      | application/json                                         |
| errors.LookUpAnIssueByCoverPhotoUnprocessableEntityError | 422                                                      | application/json                                         |
| errors.TooManyRequestsError                              | 429                                                      | application/json                                         |
| errors.ServiceUnavailableError                           | 503                                                      | application/json                                         |
| errors.VerseDbDefaultError                               | 4XX, 5XX                                                 | \*/\*                                                    |