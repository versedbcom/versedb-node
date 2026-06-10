# UpdateFollowPreferencesResponse

## Example Usage

```typescript
import { UpdateFollowPreferencesResponse } from "@versedbcom/sdk/models/operations";

let value: UpdateFollowPreferencesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    message: "Preferences updated",
    preferences: {
      emailNotifications: true,
      pushNotifications: false,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                            | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `result`                                                                                                             | [operations.UpdateFollowPreferencesResponseBody](../../models/operations/update-follow-preferences-response-body.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | {<br/>"message": "Preferences updated",<br/>"preferences": {<br/>"email_notifications": true,<br/>"push_notifications": false<br/>}<br/>} |