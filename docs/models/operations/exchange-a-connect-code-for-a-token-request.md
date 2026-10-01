# ExchangeAConnectCodeForATokenRequest

## Example Usage

```typescript
import { ExchangeAConnectCodeForATokenRequest } from "@versedbcom/sdk/models/operations";

let value: ExchangeAConnectCodeForATokenRequest = {
  grantType: "authorization_code",
  code: "9Qm2cT4xZ7bN1pL8vR3kW6yH0sD5fJ2aG4eU7iO1nB3vC6xZ",
  redirectUri: "https://example.com/wp-admin/options-general.php?page=versedb",
  codeVerifier: "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `grantType`                                                   | *string*                                                      | :heavy_check_mark:                                            | Must be `authorization_code`.                                 | authorization_code                                            |
| `code`                                                        | *string*                                                      | :heavy_check_mark:                                            | The code from the redirect.                                   | 9Qm2cT4xZ7bN1pL8vR3kW6yH0sD5fJ2aG4eU7iO1nB3vC6xZ              |
| `redirectUri`                                                 | *string*                                                      | :heavy_check_mark:                                            | Exactly the redirect_uri sent to /connect.                    | https://example.com/wp-admin/options-general.php?page=versedb |
| `codeVerifier`                                                | *string*                                                      | :heavy_check_mark:                                            | The verifier the code_challenge was made from.                | dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk                   |