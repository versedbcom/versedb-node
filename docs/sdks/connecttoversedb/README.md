# ConnectToVerseDB

## Overview


Lets a third-party site get a read-only token for a member's account without the member
copying one by hand. It is an OAuth 2.0 authorization-code flow with PKCE (S256).

1. Generate a random `code_verifier` (43-128 characters) and a `state`, and keep both on your
   server. The `code_challenge` is the base64url-encoded SHA-256 of the verifier, without padding.
2. Send the member to `https://versedb.com/connect` with `redirect_uri`, `state`,
   `code_challenge`, `code_challenge_method=S256`, and optionally `client_name` (your app, such as
   `WordPress`, 40 characters at most), `site_name` (100 at most) and `scope` (a space-separated
   subset of `read:public read:showcase`; both by default). `redirect_uri` must be HTTPS, or
   `http://localhost` while developing.
3. The member signs in if needed and approves or denies. VerseDB redirects to `redirect_uri` with
   `code` and `state`, or with `error=access_denied` and `state` when they deny. Check that
   `state` matches.
4. Within 5 minutes, exchange the code here from your server.

The token is named "{client_name}: {your host}", lasts 365 days, shows in the member's My Apps
page and counts toward their limit of 10 active tokens. Connecting the same site again replaces
its previous token. `read:showcase` reads the member's profile, collection, wishlist, pull list and
reading progress for display, without email, birth date, location, prices, notes, storage or loans.

### Available Operations

* [exchangeAConnectCodeForAToken](#exchangeaconnectcodeforatoken) - Exchange a Connect code for a token

## exchangeAConnectCodeForAToken

Redeems the single-use code from the Connect redirect. A code works once: a second attempt,
a wrong `code_verifier` or a different `redirect_uri` fails and the code cannot be used again.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="exchangeAConnectCodeForAToken" method="post" path="/api/v1/connect/token" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB();

async function run() {
  const result = await verseDB.connectToVerseDB.exchangeAConnectCodeForAToken({
    grantType: "authorization_code",
    code: "9Qm2cT4xZ7bN1pL8vR3kW6yH0sD5fJ2aG4eU7iO1nB3vC6xZ",
    redirectUri: "https://example.com/wp-admin/options-general.php?page=versedb",
    codeVerifier: "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { connectToVerseDBExchangeAConnectCodeForAToken } from "@versedbcom/sdk/funcs/connect-to-verse-db-exchange-a-connect-code-for-a-token.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore();

async function run() {
  const res = await connectToVerseDBExchangeAConnectCodeForAToken(verseDB, {
    grantType: "authorization_code",
    code: "9Qm2cT4xZ7bN1pL8vR3kW6yH0sD5fJ2aG4eU7iO1nB3vC6xZ",
    redirectUri: "https://example.com/wp-admin/options-general.php?page=versedb",
    codeVerifier: "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectToVerseDBExchangeAConnectCodeForAToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExchangeAConnectCodeForATokenRequest](../../models/operations/exchange-a-connect-code-for-a-token-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ExchangeAConnectCodeForATokenResponse](../../models/operations/exchange-a-connect-code-for-a-token-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestError      | 400                         | application/json            |
| errors.TooManyRequestsError | 429                         | application/json            |
| errors.VerseDbDefaultError  | 4XX, 5XX                    | \*/\*                       |