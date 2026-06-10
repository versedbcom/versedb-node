# GetUserProfileResponseBody


## Supported Types

### `operations.GetUserProfileResponseBody1`

```typescript
const value: operations.GetUserProfileResponseBody1 = {
  data: {
    id: 123,
    username: "comic_fan_42",
    name: "John Doe",
    bio: "Comic collector since 1985",
    avatarUrl: "https://...",
    bannerUrl: "https://...",
    glowColor: "#FF5733",
    isPro: true,
    isPrivate: false,
    isSelf: false,
    createdAt: "2024-01-15T10:30:00Z",
    level: 5,
    xp: 1200,
    xpForNextLevel: 2000,
    xpProgressPercent: 60,
    contributionsCount: 42,
    visibility: {
      showActivity: true,
      showCollection: true,
      showReadingList: false,
      isWishlistPublic: true,
    },
    stats: {
      reviewsCount: 15,
      collectionCount: 200,
      readingCount: 150,
      listsCount: 5,
    },
    activity: [
      {
        type: "review",
        title: "Reviewed",
        entityType: "Issue",
        entityName: "The Amazing Spider-Man #1",
        entityId: 5432,
        timestamp: "2024-06-01T18:00:00Z",
      },
      {
        type: "collection",
        title: "Added to Collection",
        entityType: "Issue",
        entityName: "The Amazing Spider-Man #2",
        entityId: 5433,
        timestamp: "2024-05-30T21:15:00Z",
      },
    ],
  },
};
```

### `operations.GetUserProfileResponseBody2`

```typescript
const value: operations.GetUserProfileResponseBody2 = {
  data: {
    id: 123,
    username: "private_user",
    name: "Private User",
    avatarUrl: "https://...",
    isPro: false,
    isPrivate: true,
    isSelf: false,
    createdAt: "2024-01-15T10:30:00Z",
  },
};
```

