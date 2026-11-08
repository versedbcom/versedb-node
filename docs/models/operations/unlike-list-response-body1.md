# UnlikeListResponseBody1

Unliked

## Example Usage

```typescript
import { UnlikeListResponseBody1 } from "@versedbcom/sdk/models/operations";

let value: UnlikeListResponseBody1 = {
  message: "List unliked successfully.",
  liked: false,
  likesCount: 151,
  myReaction: null,
  reactions: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `message`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | List unliked successfully.                                                           |
| `liked`                                                                              | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  | false                                                                                |
| `likesCount`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | 151                                                                                  |
| `myReaction`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | The reaction the user now holds, null for none.                                      | null                                                                                 |
| `reactions`                                                                          | [operations.UnlikeListReaction1](../../models/operations/unlike-list-reaction1.md)[] | :heavy_check_mark:                                                                   | Each reaction left on the list with its count, most used first.                      |                                                                                      |