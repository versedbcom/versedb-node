# FollowContentRequest

## Example Usage

```typescript
import { FollowContentRequest } from "@versedbcom/sdk/models/operations";

let value: FollowContentRequest = {
  type: "title",
  id: 45,
  preferences: {
    emailNotifications: true,
    pushNotifications: false,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The content type (title, character, podcast, creator, publisher, team, story_arc, comic_shop, event, user). | title                                                                                                       |
| `id`                                                                                                        | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The ID of the content to follow.                                                                            | 45                                                                                                          |
| `preferences`                                                                                               | [operations.FollowContentPreferences](../../models/operations/follow-content-preferences.md)                | :heavy_minus_sign:                                                                                          | Notification preferences.                                                                                   | {<br/>"email_notifications": true,<br/>"push_notifications": false<br/>}                                    |