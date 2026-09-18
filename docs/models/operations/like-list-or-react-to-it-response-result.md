# LikeListOrReactToItResponseResult


## Supported Types

### `operations.LikeListOrReactToItResponseBodyUnion`

```typescript
const value: operations.LikeListOrReactToItResponseBodyUnion = {
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

### `operations.LikeListOrReactToItResponseBody`

```typescript
const value: operations.LikeListOrReactToItResponseBody = {
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

