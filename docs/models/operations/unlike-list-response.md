# UnlikeListResponse

## Example Usage

```typescript
import { UnlikeListResponse } from "@versedbcom/sdk/models/operations";

let value: UnlikeListResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    message: "List is not liked.",
    liked: false,
    likesCount: 151,
    myReaction: null,
    reactions: [
      {
        reaction: "heart",
        emoji: "❤️",
        label: "Love",
        count: 150,
      },
    ],
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.UnlikeListResponseBody* | :heavy_check_mark:                  | N/A                                 |