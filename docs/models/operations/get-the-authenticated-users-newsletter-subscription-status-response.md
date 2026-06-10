# GetTheAuthenticatedUsersNewsletterSubscriptionStatusResponse

## Example Usage

```typescript
import { GetTheAuthenticatedUsersNewsletterSubscriptionStatusResponse } from "@versedbcom/sdk/models/operations";

let value: GetTheAuthenticatedUsersNewsletterSubscriptionStatusResponse = {
  headers: {},
  result: {
    subscribed: true,
    subscribedAt: "2025-01-15T10:30:00Z",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        | Example                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |                                                                                                                                                                                    |
| `result`                                                                                                                                                                           | [operations.GetTheAuthenticatedUsersNewsletterSubscriptionStatusResponseBody](../../models/operations/get-the-authenticated-users-newsletter-subscription-status-response-body.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                | {<br/>"subscribed": true,<br/>"subscribed_at": "2025-01-15T10:30:00Z"<br/>}                                                                                                        |