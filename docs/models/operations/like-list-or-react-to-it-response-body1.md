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
  reactions: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | Reaction changed.                                                                                          |
| `liked`                                                                                                    | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        | true                                                                                                       |
| `likesCount`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | 151                                                                                                        |
| `myReaction`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The reaction the user now holds, null for none.                                                            | fire                                                                                                       |
| `reactions`                                                                                                | [operations.LikeListOrReactToItReaction1](../../models/operations/like-list-or-react-to-it-reaction1.md)[] | :heavy_check_mark:                                                                                         | Each reaction left on the list with its count, most used first.                                            |                                                                                                            |