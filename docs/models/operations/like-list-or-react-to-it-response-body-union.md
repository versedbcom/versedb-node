# LikeListOrReactToItResponseBodyUnion

Success.


## Supported Types

### `operations.LikeListOrReactToItResponseBody1`

```typescript
const value: operations.LikeListOrReactToItResponseBody1 = {
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

### `operations.LikeListOrReactToItResponseBody2`

```typescript
const value: operations.LikeListOrReactToItResponseBody2 = {
  message: "List is already liked.",
  liked: true,
};
```

