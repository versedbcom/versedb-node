# GetTheAuthenticatedUserResponseBody

## Example Usage

```typescript
import { GetTheAuthenticatedUserResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetTheAuthenticatedUserResponseBody = {
  data: {
    id: 12,
    name: "Scribe Test User",
    username: "scribe-test-user",
    email: "scribe-tester@internal.versedb.com",
    bio: null,
    avatar: null,
    profileImage: null,
    profileImageUrl: null,
    glowColor: "#FF5722",
    bannerPath: null,
    bannerUrl: null,
    countryCode: null,
    city: null,
    region: null,
    postalCode: null,
    formattedLocation: null,
    isPrivate: false,
    isWishlistPublic: true,
    publicWishlistId: null,
    emailNotifications: true,
    contentEditNotifications: true,
    commentReplyNotifications: true,
    pushNotificationsEnabled: true,
    inappNotificationsEnabled: true,
    showNsfwWarnings: true,
    birthDate: null,
    canViewNsfw: false,
    showReadingList: true,
    showCollection: true,
    showActivity: true,
    showSpoilers: false,
    preferredMediums: [
      "comic",
    ],
    preferredGenres: [],
    preferredLanguages: [
      "en",
    ],
    locale: null,
    onboardingCompletedAt: null,
    onboardingStep: 0,
    aiDiscoveryEnabled: true,
    isPro: false,
    level: 1,
    xp: 0,
    xpForNextLevel: 100,
    xpProgressPercent: 0,
    contributionsCount: 0,
    levelName: "Newcomer",
    createdAt: "2026-06-06T20:28:27.000000Z",
    updatedAt: "2026-06-06T20:28:27.000000Z",
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
| `data`                                                                                               | [operations.GetTheAuthenticatedUserData](../../models/operations/get-the-authenticated-user-data.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |