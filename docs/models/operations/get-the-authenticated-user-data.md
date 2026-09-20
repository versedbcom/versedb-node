# GetTheAuthenticatedUserData

## Example Usage

```typescript
import { GetTheAuthenticatedUserData } from "@versedbcom/sdk/models/operations";

let value: GetTheAuthenticatedUserData = {
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
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 123                                                                                   |
| `name`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | John Doe                                                                              |
| `username`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | comic_fan_42                                                                          |
| `email`                                                                               | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | john@example.com                                                                      |
| `bio`                                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | Comic collector since 1985                                                            |
| `profileImageUrl`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | https://r2.versedb.com/uploads/users/comic-fan-42/comic-fan-42-abc123-profile_md.webp |
| `bannerUrl`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | null                                                                                  |
| `countryCode`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | US                                                                                    |
| `city`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | New York                                                                              |
| `region`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | NY                                                                                    |
| `postalCode`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 10001                                                                                 |
| `formattedLocation`                                                                   | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | New York, NY                                                                          |
| `isPrivate`                                                                           | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | false                                                                                 |
| `isWishlistPublic`                                                                    | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `showNsfwWarnings`                                                                    | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `canViewNsfw`                                                                         | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `showReadingList`                                                                     | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `showCollection`                                                                      | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `showActivity`                                                                        | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `showSpoilers`                                                                        | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | false                                                                                 |
| `preferredMediums`                                                                    | *string*[]                                                                            | :heavy_minus_sign:                                                                    | N/A                                                                                   | [<br/>"comic"<br/>]                                                                   |
| `preferredGenres`                                                                     | *any*[]                                                                               | :heavy_minus_sign:                                                                    | N/A                                                                                   | []                                                                                    |
| `preferredLanguages`                                                                  | *string*[]                                                                            | :heavy_minus_sign:                                                                    | N/A                                                                                   | [<br/>"en"<br/>]                                                                      |
| `locale`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | en                                                                                    |
| `isPro`                                                                               | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `level`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 5                                                                                     |
| `xp`                                                                                  | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1200                                                                                  |
| `xpForNextLevel`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 2000                                                                                  |
| `xpProgressPercent`                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 60                                                                                    |
| `contributionsCount`                                                                  | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 42                                                                                    |
| `levelName`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | Collector                                                                             |
| `hasPassword`                                                                         | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | true                                                                                  |
| `createdAt`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 2024-01-15T10:30:00.000000Z                                                           |
| `updatedAt`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 2026-06-20T14:32:00.000000Z                                                           |