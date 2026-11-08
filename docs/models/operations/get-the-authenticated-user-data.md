# GetTheAuthenticatedUserData

## Example Usage

```typescript
import { GetTheAuthenticatedUserData } from "@versedbcom/sdk/models/operations";

let value: GetTheAuthenticatedUserData = {
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
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *number*                             | :heavy_check_mark:                   | N/A                                  | 123                                  |
| `name`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | comic_fan_42                         |
| `username`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | comic_fan_42                         |
| `email`                              | *string*                             | :heavy_minus_sign:                   | N/A                                  | john@example.com                     |
| `bio`                                | *string*                             | :heavy_check_mark:                   | N/A                                  | Comic collector since 1985           |
| `avatar`                             | *string*                             | :heavy_check_mark:                   | N/A                                  | https://...-profile_md.webp          |
| `profileImage`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | users/123/comic-fan-42.jpg           |
| `profileImageUrl`                    | *string*                             | :heavy_check_mark:                   | N/A                                  | https://...-profile_md.webp          |
| `bannerPath`                         | *string*                             | :heavy_check_mark:                   | N/A                                  | null                                 |
| `bannerUrl`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | null                                 |
| `countryCode`                        | *string*                             | :heavy_minus_sign:                   | N/A                                  | US                                   |
| `city`                               | *string*                             | :heavy_minus_sign:                   | N/A                                  | New York                             |
| `region`                             | *string*                             | :heavy_minus_sign:                   | N/A                                  | NY                                   |
| `postalCode`                         | *string*                             | :heavy_minus_sign:                   | N/A                                  | 10001                                |
| `formattedLocation`                  | *string*                             | :heavy_minus_sign:                   | N/A                                  | New York, NY, United States          |
| `isPrivate`                          | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | false                                |
| `isWishlistPublic`                   | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `publicWishlistId`                   | *string*                             | :heavy_minus_sign:                   | N/A                                  | 9d1c6b0e-7f0a-4c55-9a51-2f4a3f1d2b7e |
| `emailNotifications`                 | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `contentEditNotifications`           | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `commentReplyNotifications`          | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `showNsfwWarnings`                   | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `birthDate`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  | 1990-05-01                           |
| `canViewNsfw`                        | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `showReadingList`                    | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `showCollection`                     | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `showActivity`                       | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `showFollowers`                      | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `showFollowing`                      | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `showSpoilers`                       | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | false                                |
| `promptReviewOnCollect`              | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | false                                |
| `preferredMediums`                   | *string*[]                           | :heavy_minus_sign:                   | N/A                                  | [<br/>"comic"<br/>]                  |
| `preferredGenres`                    | *any*[]                              | :heavy_minus_sign:                   | N/A                                  | []                                   |
| `preferredLanguages`                 | *string*[]                           | :heavy_minus_sign:                   | N/A                                  | [<br/>"en"<br/>]                     |
| `locale`                             | *string*                             | :heavy_minus_sign:                   | N/A                                  | en                                   |
| `onboardingCompletedAt`              | *string*                             | :heavy_minus_sign:                   | N/A                                  | 2024-01-15T10:30:00.000000Z          |
| `onboardingStep`                     | *number*                             | :heavy_minus_sign:                   | N/A                                  | 0                                    |
| `aiDiscoveryEnabled`                 | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `isPro`                              | *boolean*                            | :heavy_check_mark:                   | N/A                                  | true                                 |
| `canChangeUsername`                  | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | false                                |
| `level`                              | *number*                             | :heavy_check_mark:                   | N/A                                  | 5                                    |
| `xp`                                 | *number*                             | :heavy_check_mark:                   | N/A                                  | 1200                                 |
| `xpForNextLevel`                     | *number*                             | :heavy_check_mark:                   | N/A                                  | 2000                                 |
| `xpProgressPercent`                  | *number*                             | :heavy_check_mark:                   | N/A                                  | 60                                   |
| `contributionsCount`                 | *number*                             | :heavy_check_mark:                   | N/A                                  | 42                                   |
| `levelName`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | Collector                            |
| `createdAt`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | 2024-01-15T10:30:00.000000Z          |
| `updatedAt`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | 2026-06-20T14:32:00.000000Z          |
| `hasPassword`                        | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `deletionRequestedAt`                | *string*                             | :heavy_minus_sign:                   | N/A                                  | null                                 |
| `deletionConfirmedAt`                | *string*                             | :heavy_minus_sign:                   | N/A                                  | null                                 |
| `deletionScheduledFor`               | *string*                             | :heavy_minus_sign:                   | N/A                                  | null                                 |