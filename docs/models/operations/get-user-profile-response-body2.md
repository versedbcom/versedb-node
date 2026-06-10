# GetUserProfileResponseBody2

Private Profile

## Example Usage

```typescript
import { GetUserProfileResponseBody2 } from "@versedbcom/sdk/models/operations";

let value: GetUserProfileResponseBody2 = {
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

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [operations.GetUserProfileData2](../../models/operations/get-user-profile-data2.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |