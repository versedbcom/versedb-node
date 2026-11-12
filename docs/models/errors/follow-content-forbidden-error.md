# FollowContentForbiddenError

The token holds neither write:follows nor write:lists, or the profile is private or a block stands between the two members (the body names `code`).

## Example Usage

```typescript
import { FollowContentForbiddenError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `message`                 | *string*                  | :heavy_check_mark:        | N/A                       | Insufficient token scope. |