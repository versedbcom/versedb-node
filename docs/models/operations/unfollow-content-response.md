# UnfollowContentResponse

## Example Usage

```typescript
import { UnfollowContentResponse } from "@versedbcom/sdk/models/operations";

let value: UnfollowContentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    message: "Not following this title",
    isFollowing: false,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `headers`                                | Record<string, *string*[]>               | :heavy_check_mark:                       | N/A                                      |
| `result`                                 | *operations.UnfollowContentResponseBody* | :heavy_check_mark:                       | N/A                                      |