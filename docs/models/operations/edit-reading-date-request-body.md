# EditReadingDateRequestBody

## Example Usage

```typescript
import { EditReadingDateRequestBody } from "@versedbcom/sdk/models/operations";

let value: EditReadingDateRequestBody = {
  readAt: "2026-03-01",
  undated: true,
  variantId: 789,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `readAt`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | Date in YYYY-MM-DD format, must not be in the future. Pass null to mark as unread.        | 2026-03-01                                                                                |
| `undated`                                                                                 | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | True to clear the date and keep the issue read (optional). Cannot be sent with `read_at`. | true                                                                                      |
| `variantId`                                                                               | *number*                                                                                  | :heavy_minus_sign:                                                                        | Specific variant ID (optional).                                                           | 789                                                                                       |