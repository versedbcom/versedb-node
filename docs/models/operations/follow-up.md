# FollowUp

## Example Usage

```typescript
import { FollowUp } from "@versedbcom/sdk/models/operations";

let value: FollowUp = {
  prompt: true,
  canMarkRead: true,
  canReview: true,
  hasReview: false,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `prompt`                                                          | *boolean*                                                         | :heavy_check_mark:                                                | The member asked to be prompted, and there is something to offer. | true                                                              |
| `canMarkRead`                                                     | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               | true                                                              |
| `canReview`                                                       | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               | true                                                              |
| `hasReview`                                                       | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               | false                                                             |