# UpdateFollowPreferencesResponseBody

Success

## Example Usage

```typescript
import { UpdateFollowPreferencesResponseBody } from "@versedbcom/sdk/models/operations";

let value: UpdateFollowPreferencesResponseBody = {
  message: "Preferences updated",
  preferences: {
    emailNotifications: true,
    pushNotifications: false,
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               | Preferences updated                                                                                               |
| `preferences`                                                                                                     | [operations.UpdateFollowPreferencesPreferences](../../models/operations/update-follow-preferences-preferences.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |