# LikeListResponse

## Example Usage

```typescript
import { LikeListResponse } from "@versedbcom/sdk/models/operations";

let value: LikeListResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [],
  },
  result: {
    message: "List is already liked.",
    liked: true,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.LikeListResponseResult* | :heavy_check_mark:                  | N/A                                 |