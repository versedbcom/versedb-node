# UnsaveListResponse

## Example Usage

```typescript
import { UnsaveListResponse } from "@versedbcom/sdk/models/operations";

let value: UnsaveListResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    message: "List is not saved.",
    saved: false,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.UnsaveListResponseBody* | :heavy_check_mark:                  | N/A                                 |