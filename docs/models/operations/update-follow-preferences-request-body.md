# UpdateFollowPreferencesRequestBody

## Example Usage

```typescript
import { UpdateFollowPreferencesRequestBody } from "@versedbcom/sdk/models/operations";

let value: UpdateFollowPreferencesRequestBody = {
  emailNotifications: true,
  pushNotifications: false,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `emailNotifications`         | *boolean*                    | :heavy_minus_sign:           | Receive email notifications. | true                         |
| `pushNotifications`          | *boolean*                    | :heavy_minus_sign:           | Receive push notifications.  | false                        |