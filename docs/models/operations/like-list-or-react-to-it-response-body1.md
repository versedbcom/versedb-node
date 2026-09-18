# LikeListOrReactToItResponseBody1

Reaction changed

## Example Usage

```typescript
import { LikeListOrReactToItResponseBody1 } from "@versedbcom/sdk/models/operations";

let value: LikeListOrReactToItResponseBody1 = {
  message: "Reaction changed.",
  liked: true,
  likesCount: 151,
  myReaction: "fire",
  reactions: [
    {
      reaction: "heart",
      emoji: "❤️",
      label: "Love",
      count: 150,
    },
    {
      reaction: "fire",
      emoji: "🔥",
      label: "Fire",
      count: 1,
    },
  ],
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                                     | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           | Reaction changed.                                                                                                                             |
| `liked`                                                                                                                                       | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           | true                                                                                                                                          |
| `likesCount`                                                                                                                                  | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           | 151                                                                                                                                           |
| `myReaction`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           | fire                                                                                                                                          |
| `reactions`                                                                                                                                   | [operations.LikeListOrReactToItReaction1](../../models/operations/like-list-or-react-to-it-reaction1.md)[]                                    | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           | [<br/>{<br/>"reaction": "heart",<br/>"emoji": "❤️",<br/>"label": "Love",<br/>"count": 150<br/>},<br/>{<br/>"reaction": "fire",<br/>"emoji": "🔥",<br/>"label": "Fire",<br/>"count": 1<br/>}<br/>] |