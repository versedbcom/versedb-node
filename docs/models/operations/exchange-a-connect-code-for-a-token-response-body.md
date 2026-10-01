# ExchangeAConnectCodeForATokenResponseBody

Success.

## Example Usage

```typescript
import { ExchangeAConnectCodeForATokenResponseBody } from "@versedbcom/sdk/models/operations";

let value: ExchangeAConnectCodeForATokenResponseBody = {
  accessToken: "Sq2mX9p...",
  tokenType: "Bearer",
  expiresAt: "2027-09-29T15:00:00Z",
  abilities: [
    "read:public",
    "read:showcase",
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `accessToken`                      | *string*                           | :heavy_minus_sign:                 | N/A                                | Sq2mX9p...                         |
| `tokenType`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | Bearer                             |
| `expiresAt`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | 2027-09-29T15:00:00Z               |
| `abilities`                        | *string*[]                         | :heavy_minus_sign:                 | N/A                                | [<br/>"read:public",<br/>"read:showcase"<br/>] |