# BadRequestError

The request could not be processed: an OAuth error and its description.

## Example Usage

```typescript
import { BadRequestError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `error`                                                   | *string*                                                  | :heavy_check_mark:                                        | unsupported_grant_type, invalid_request or invalid_grant. | invalid_grant                                             |
| `errorDescription`                                        | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       | This code is invalid or has expired.                      |