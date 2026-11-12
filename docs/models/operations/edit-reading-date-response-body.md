# EditReadingDateResponseBody

Updated

## Example Usage

```typescript
import { EditReadingDateResponseBody } from "@versedbcom/sdk/models/operations";

let value: EditReadingDateResponseBody = {
  readAt: "2026-03-01T00:00:00+00:00",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `readAt`                            | *string*                            | :heavy_check_mark:                  | The new date; null after `undated`. | 2026-03-01T00:00:00+00:00           |