# UnfollowContentResponse

## Example Usage

```typescript
import { UnfollowContentResponse } from "@versedbcom/sdk/models/operations";

let value: UnfollowContentResponse = {
  headers: {},
  result: {
    message: "Unfollowed title successfully",
    isFollowing: false,
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `result`                                                                                            | [operations.UnfollowContentResponseBody](../../models/operations/unfollow-content-response-body.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 | {<br/>"message": "Unfollowed title successfully",<br/>"is_following": false<br/>}                   |