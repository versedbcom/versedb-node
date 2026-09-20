# GetTheAuthenticatedUserResponseBody

Success

## Example Usage

```typescript
import { GetTheAuthenticatedUserResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetTheAuthenticatedUserResponseBody = {
  data: {
    id: 123,
    name: "John Doe",
    username: "comic_fan_42",
    email: "john@example.com",
    bio: "Comic collector since 1985",
    profileImageUrl:
      "https://r2.versedb.com/uploads/users/comic-fan-42/comic-fan-42-abc123-profile_md.webp",
    bannerUrl: null,
    countryCode: "US",
    city: "New York",
    region: "NY",
    postalCode: "10001",
    formattedLocation: "New York, NY",
    isPrivate: false,
    isWishlistPublic: true,
    showNsfwWarnings: true,
    canViewNsfw: true,
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
    locale: "en",
    isPro: true,
    level: 5,
    xp: 1200,
    xpForNextLevel: 2000,
    xpProgressPercent: 60,
    contributionsCount: 42,
    levelName: "Collector",
    hasPassword: true,
    createdAt: "2024-01-15T10:30:00.000000Z",
    updatedAt: "2026-06-20T14:32:00.000000Z",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `data`                                                                                               | [operations.GetTheAuthenticatedUserData](../../models/operations/get-the-authenticated-user-data.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |