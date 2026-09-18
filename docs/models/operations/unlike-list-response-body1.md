# UnlikeListResponseBody1

Unliked

## Example Usage

```typescript
import { UnlikeListResponseBody1 } from "@versedbcom/sdk/models/operations";

let value: UnlikeListResponseBody1 = {
  message: "List unliked successfully.",
  liked: false,
  likesCount: 150,
  myReaction: null,
  reactions: [
    {
      reaction: "heart",
      emoji: "❤️",
      label: "Love",
      count: 150,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `message`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | List unliked successfully.                                                         |
| `liked`                                                                            | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                | false                                                                              |
| `likesCount`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | 150                                                                                |
| `myReaction`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | null                                                                               |
| `reactions`                                                                        | [operations.UnlikeListReaction](../../models/operations/unlike-list-reaction.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                | [<br/>{<br/>"reaction": "heart",<br/>"emoji": "❤️",<br/>"label": "Love",<br/>"count": 150<br/>}<br/>] |