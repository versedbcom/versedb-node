# LikeListOrReactToItResponseBody

Liked

## Example Usage

```typescript
import { LikeListOrReactToItResponseBody } from "@versedbcom/sdk/models/operations";

let value: LikeListOrReactToItResponseBody = {
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
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                                         | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               | List liked successfully.                                                                                                                          |
| `liked`                                                                                                                                           | *boolean*                                                                                                                                         | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               | true                                                                                                                                              |
| `likesCount`                                                                                                                                      | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               | 151                                                                                                                                               |
| `myReaction`                                                                                                                                      | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               | clap                                                                                                                                              |
| `reactions`                                                                                                                                       | [operations.LikeListOrReactToItReaction2](../../models/operations/like-list-or-react-to-it-reaction2.md)[]                                        | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               | [<br/>{<br/>"reaction": "heart",<br/>"emoji": "❤️",<br/>"label": "Love",<br/>"count": 150<br/>},<br/>{<br/>"reaction": "clap",<br/>"emoji": "👏",<br/>"label": "Applause",<br/>"count": 1<br/>}<br/>] |