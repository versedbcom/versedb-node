# FollowContentResponse

## Example Usage

```typescript
import { FollowContentResponse } from "@versedbcom/sdk/models/operations";

let value: FollowContentResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    message: "Following title successfully",
    isFollowing: true,
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `result`                                                                                        | [operations.FollowContentResponseBody](../../models/operations/follow-content-response-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             | {<br/>"message": "Following title successfully",<br/>"is_following": true<br/>}                 |