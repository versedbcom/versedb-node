# MarkAsReadRequestBody

## Example Usage

```typescript
import { MarkAsReadRequestBody } from "@versedbcom/sdk/models/operations";

let value: MarkAsReadRequestBody = {
  readAt: "2026-03-01",
  variantId: 789,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `readAt`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The day it was read, YYYY-MM-DD, not in the future (optional). Leave it out when the date is unknown. | 2026-03-01                                                                                            |
| `variantId`                                                                                           | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Specific variant ID (optional).                                                                       | 789                                                                                                   |