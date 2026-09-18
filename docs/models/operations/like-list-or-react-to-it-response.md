# LikeListOrReactToItResponse

## Example Usage

```typescript
import { LikeListOrReactToItResponse } from "@versedbcom/sdk/models/operations";

let value: LikeListOrReactToItResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    message: "List liked successfully.",
    liked: true,
    likesCount: 151,
    myReaction: "clap",
    reactions: [
      {
        reaction: "heart",
        emoji: "❤️",
        label: "Love",
        count: 150,
      },
      {
        reaction: "clap",
        emoji: "👏",
        label: "Applause",
        count: 1,
      },
    ],
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `headers`                                      | Record<string, *string*[]>                     | :heavy_check_mark:                             | N/A                                            |
| `result`                                       | *operations.LikeListOrReactToItResponseResult* | :heavy_check_mark:                             | N/A                                            |