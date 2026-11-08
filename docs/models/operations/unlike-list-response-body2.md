# UnlikeListResponseBody2

Not Liked

## Example Usage

```typescript
import { UnlikeListResponseBody2 } from "@versedbcom/sdk/models/operations";

let value: UnlikeListResponseBody2 = {
  message: "List is not liked.",
  liked: false,
  likesCount: 151,
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `message`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | List is not liked.                                                                   |
| `liked`                                                                              | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  | false                                                                                |
| `likesCount`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | 151                                                                                  |
| `myReaction`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | The reaction the user now holds, null for none.                                      | null                                                                                 |
| `reactions`                                                                          | [operations.UnlikeListReaction2](../../models/operations/unlike-list-reaction2.md)[] | :heavy_check_mark:                                                                   | Each reaction left on the list with its count, most used first.                      |                                                                                      |