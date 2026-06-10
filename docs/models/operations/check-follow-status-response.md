# CheckFollowStatusResponse

## Example Usage

```typescript
import { CheckFollowStatusResponse } from "@versedbcom/sdk/models/operations";

let value: CheckFollowStatusResponse = {
  headers: {},
  result: {
    isFollowing: true,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `result`                                                                                                 | [operations.CheckFollowStatusResponseBody](../../models/operations/check-follow-status-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      | {<br/>"is_following": true<br/>}                                                                         |