# SubscribeTheAuthenticatedUserToTheNewsletterResponse

## Example Usage

```typescript
import { SubscribeTheAuthenticatedUserToTheNewsletterResponse } from "@versedbcom/sdk/models/operations";

let value: SubscribeTheAuthenticatedUserToTheNewsletterResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    message: "Successfully subscribed to the newsletter.",
    subscribed: true,
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        | Example                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |                                                                                                                                                                    |
| `result`                                                                                                                                                           | [operations.SubscribeTheAuthenticatedUserToTheNewsletterResponseBody](../../models/operations/subscribe-the-authenticated-user-to-the-newsletter-response-body.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                | {<br/>"message": "Successfully subscribed to the newsletter.",<br/>"subscribed": true<br/>}                                                                        |