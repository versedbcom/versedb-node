# UnlikeListResponse

## Example Usage

```typescript
import { UnlikeListResponse } from "@versedbcom/sdk/models/operations";

let value: UnlikeListResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    message: "List unliked successfully.",
    liked: false,
    likesCount: 150,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.UnlikeListResponseBody* | :heavy_check_mark:                  | N/A                                 |