# UnlikeListResponseBody

Success.


## Supported Types

### `operations.UnlikeListResponseBody1`

```typescript
const value: operations.UnlikeListResponseBody1 = {
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

### `operations.UnlikeListResponseBody2`

```typescript
const value: operations.UnlikeListResponseBody2 = {
  message: "List is not liked.",
  liked: false,
};
```

