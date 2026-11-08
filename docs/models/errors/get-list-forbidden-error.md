# GetListForbiddenError

The token lacks the read:public ability; the list is private or a draft and the token may not read its owner's private data (`read:user` on the owner's own token); the list is for Pro members; or the request sent `owned`, `read`, `reviewed`, `alert_filter`, `item_ids` or `alert_id`, which only the app's own API reads.

## Example Usage

```typescript
import { GetListForbiddenError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `message`                 | *string*                  | :heavy_check_mark:        | N/A                       | Insufficient token scope. |