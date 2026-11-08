# LikeListOrReactToItResponse

## Example Usage

```typescript
import { LikeListOrReactToItResponse } from "@versedbcom/sdk/models/operations";

let value: LikeListOrReactToItResponse = {
  headers: {
    "key": [],
  },
  result: {
    message: "List is already liked.",
    liked: true,
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `headers`                                      | Record<string, *string*[]>                     | :heavy_check_mark:                             | N/A                                            |
| `result`                                       | *operations.LikeListOrReactToItResponseResult* | :heavy_check_mark:                             | N/A                                            |