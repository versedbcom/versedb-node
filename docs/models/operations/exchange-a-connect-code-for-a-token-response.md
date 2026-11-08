# ExchangeAConnectCodeForATokenResponse

## Example Usage

```typescript
import { ExchangeAConnectCodeForATokenResponse } from "@versedbcom/sdk/models/operations";

let value: ExchangeAConnectCodeForATokenResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    accessToken: "Sq2mX9p...",
    tokenType: "Bearer",
    expiresAt: "2027-09-29T15:00:00Z",
    abilities: [
      "read:public",
      "read:showcase",
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                            | Record<string, *string*[]>                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `result`                                                                                                                             | [operations.ExchangeAConnectCodeForATokenResponseBody](../../models/operations/exchange-a-connect-code-for-a-token-response-body.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |