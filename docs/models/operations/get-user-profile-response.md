# GetUserProfileResponse

## Example Usage

```typescript
import { GetUserProfileResponse } from "@versedbcom/sdk/models/operations";

let value: GetUserProfileResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `headers`                               | Record<string, *string*[]>              | :heavy_check_mark:                      | N/A                                     |
| `result`                                | *operations.GetUserProfileResponseBody* | :heavy_check_mark:                      | N/A                                     |