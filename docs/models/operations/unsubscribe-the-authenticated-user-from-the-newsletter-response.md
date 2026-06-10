# UnsubscribeTheAuthenticatedUserFromTheNewsletterResponse

## Example Usage

```typescript
import { UnsubscribeTheAuthenticatedUserFromTheNewsletterResponse } from "@versedbcom/sdk/models/operations";

let value: UnsubscribeTheAuthenticatedUserFromTheNewsletterResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    message: "Successfully unsubscribed from the newsletter.",
    subscribed: false,
  },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                  | Record<string, *string*[]>                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `result`                                                                                                                                                                   | [operations.UnsubscribeTheAuthenticatedUserFromTheNewsletterResponseBody](../../models/operations/unsubscribe-the-authenticated-user-from-the-newsletter-response-body.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        | {<br/>"message": "Successfully unsubscribed from the newsletter.",<br/>"subscribed": false<br/>}                                                                           |