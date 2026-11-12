# FollowContentResponse

## Example Usage

```typescript
import { FollowContentResponse } from "@versedbcom/sdk/models/operations";

let value: FollowContentResponse = {
  headers: {},
  result: {
    message: "Following title successfully",
    isFollowing: true,
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.FollowContentResponseBody* | :heavy_check_mark:                     | N/A                                    |