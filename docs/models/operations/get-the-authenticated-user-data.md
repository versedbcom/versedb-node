# GetTheAuthenticatedUserData

## Example Usage

```typescript
import { GetTheAuthenticatedUserData } from "@versedbcom/sdk/models/operations";

let value: GetTheAuthenticatedUserData = {
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
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *number*                           | :heavy_minus_sign:                 | N/A                                | 12                                 |
| `name`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | Scribe Test User                   |
| `username`                         | *string*                           | :heavy_minus_sign:                 | N/A                                | scribe-test-user                   |
| `email`                            | *string*                           | :heavy_minus_sign:                 | N/A                                | scribe-tester@internal.versedb.com |
| `bio`                              | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `avatar`                           | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `profileImage`                     | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `profileImageUrl`                  | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `glowColor`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | #FF5722                            |
| `bannerPath`                       | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `bannerUrl`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `countryCode`                      | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `city`                             | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `region`                           | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `postalCode`                       | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `formattedLocation`                | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `isPrivate`                        | *boolean*                          | :heavy_minus_sign:                 | N/A                                | false                              |
| `isWishlistPublic`                 | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `publicWishlistId`                 | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `emailNotifications`               | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `contentEditNotifications`         | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `commentReplyNotifications`        | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `pushNotificationsEnabled`         | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `inappNotificationsEnabled`        | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `showNsfwWarnings`                 | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `birthDate`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `canViewNsfw`                      | *boolean*                          | :heavy_minus_sign:                 | N/A                                | false                              |
| `showReadingList`                  | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `showCollection`                   | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `showActivity`                     | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `showSpoilers`                     | *boolean*                          | :heavy_minus_sign:                 | N/A                                | false                              |
| `preferredMediums`                 | *string*[]                         | :heavy_minus_sign:                 | N/A                                | [<br/>"comic"<br/>]                |
| `preferredGenres`                  | *any*[]                            | :heavy_minus_sign:                 | N/A                                | []                                 |
| `preferredLanguages`               | *string*[]                         | :heavy_minus_sign:                 | N/A                                | [<br/>"en"<br/>]                   |
| `locale`                           | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `onboardingCompletedAt`            | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `onboardingStep`                   | *number*                           | :heavy_minus_sign:                 | N/A                                | 0                                  |
| `aiDiscoveryEnabled`               | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `isPro`                            | *boolean*                          | :heavy_minus_sign:                 | N/A                                | false                              |
| `level`                            | *number*                           | :heavy_minus_sign:                 | N/A                                | 1                                  |
| `xp`                               | *number*                           | :heavy_minus_sign:                 | N/A                                | 0                                  |
| `xpForNextLevel`                   | *number*                           | :heavy_minus_sign:                 | N/A                                | 100                                |
| `xpProgressPercent`                | *number*                           | :heavy_minus_sign:                 | N/A                                | 0                                  |
| `contributionsCount`               | *number*                           | :heavy_minus_sign:                 | N/A                                | 0                                  |
| `levelName`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | Newcomer                           |
| `createdAt`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | 2026-06-06T20:28:27.000000Z        |
| `updatedAt`                        | *string*                           | :heavy_minus_sign:                 | N/A                                | 2026-06-06T20:28:27.000000Z        |
| `hasPassword`                      | *boolean*                          | :heavy_minus_sign:                 | N/A                                | true                               |
| `deletionRequestedAt`              | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `deletionConfirmedAt`              | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |
| `deletionScheduledFor`             | *string*                           | :heavy_minus_sign:                 | N/A                                | null                               |