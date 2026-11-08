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
  reactions: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | List liked successfully.                                                                                   |
| `liked`                                                                                                    | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        | true                                                                                                       |
| `likesCount`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | 151                                                                                                        |
| `myReaction`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The reaction the user now holds, null for none.                                                            | clap                                                                                                       |
| `reactions`                                                                                                | [operations.LikeListOrReactToItReaction2](../../models/operations/like-list-or-react-to-it-reaction2.md)[] | :heavy_check_mark:                                                                                         | Each reaction left on the list with its count, most used first.                                            |                                                                                                            |