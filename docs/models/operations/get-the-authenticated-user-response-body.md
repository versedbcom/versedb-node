# GetTheAuthenticatedUserResponseBody

Success

## Example Usage

```typescript
import { GetTheAuthenticatedUserResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetTheAuthenticatedUserResponseBody = {
  data: {
    id: 123,
    name: "comic_fan_42",
    username: "comic_fan_42",
    email: "john@example.com",
    bio: "Comic collector since 1985",
    avatar: "https://...-profile_md.webp",
    profileImage: "users/123/comic-fan-42.jpg",
    profileImageUrl: "https://...-profile_md.webp",
    bannerPath: null,
    bannerUrl: null,
    countryCode: "US",
    city: "New York",
    region: "NY",
    postalCode: "10001",
    formattedLocation: "New York, NY, United States",
    isPrivate: false,
    isWishlistPublic: true,
    publicWishlistId: "9d1c6b0e-7f0a-4c55-9a51-2f4a3f1d2b7e",
    emailNotifications: true,
    contentEditNotifications: true,
    commentReplyNotifications: true,
    showNsfwWarnings: true,
    birthDate: "1990-05-01",
    canViewNsfw: true,
    showReadingList: true,
    showCollection: true,
    showActivity: true,
    showFollowers: true,
    showFollowing: true,
    showSpoilers: false,
    promptReviewOnCollect: false,
    preferredMediums: [
      "comic",
    ],
    preferredGenres: [],
    preferredLanguages: [
      "en",
    ],
    locale: "en",
    onboardingCompletedAt: "2024-01-15T10:30:00.000000Z",
    onboardingStep: 0,
    aiDiscoveryEnabled: true,
    isPro: true,
    canChangeUsername: false,
    level: 5,
    xp: 1200,
    xpForNextLevel: 2000,
    xpProgressPercent: 60,
    contributionsCount: 42,
    levelName: "Collector",
    createdAt: "2024-01-15T10:30:00.000000Z",
    updatedAt: "2026-06-20T14:32:00.000000Z",
    hasPassword: true,
    deletionRequestedAt: null,
    deletionConfirmedAt: null,
    deletionScheduledFor: null,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `data`                                                                                               | [operations.GetTheAuthenticatedUserData](../../models/operations/get-the-authenticated-user-data.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |