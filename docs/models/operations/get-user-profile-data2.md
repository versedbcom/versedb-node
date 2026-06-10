# GetUserProfileData2

## Example Usage

```typescript
import { GetUserProfileData2 } from "@versedbcom/sdk/models/operations";

let value: GetUserProfileData2 = {
  id: 123,
  username: "private_user",
  name: "Private User",
  avatarUrl: "https://...",
  isPro: false,
  isPrivate: true,
  isSelf: false,
  createdAt: "2024-01-15T10:30:00Z",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `id`                 | *number*             | :heavy_minus_sign:   | N/A                  | 123                  |
| `username`           | *string*             | :heavy_minus_sign:   | N/A                  | private_user         |
| `name`               | *string*             | :heavy_minus_sign:   | N/A                  | Private User         |
| `avatarUrl`          | *string*             | :heavy_minus_sign:   | N/A                  | https://...          |
| `isPro`              | *boolean*            | :heavy_minus_sign:   | N/A                  | false                |
| `isPrivate`          | *boolean*            | :heavy_minus_sign:   | N/A                  | true                 |
| `isSelf`             | *boolean*            | :heavy_minus_sign:   | N/A                  | false                |
| `createdAt`          | *string*             | :heavy_minus_sign:   | N/A                  | 2024-01-15T10:30:00Z |