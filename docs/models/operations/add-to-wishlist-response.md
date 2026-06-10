# AddToWishlistResponse

## Example Usage

```typescript
import { AddToWishlistResponse } from "@versedbcom/sdk/models/operations";

let value: AddToWishlistResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    inWishlist: true,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `headers`                                | Record<string, *string*[]>               | :heavy_check_mark:                       | N/A                                      |
| `result`                                 | *operations.AddToWishlistResponseResult* | :heavy_check_mark:                       | N/A                                      |