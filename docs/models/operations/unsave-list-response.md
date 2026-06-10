# UnsaveListResponse

## Example Usage

```typescript
import { UnsaveListResponse } from "@versedbcom/sdk/models/operations";

let value: UnsaveListResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    message: "List unsaved successfully.",
    saved: false,
    savesCount: 89,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.UnsaveListResponseBody* | :heavy_check_mark:                  | N/A                                 |