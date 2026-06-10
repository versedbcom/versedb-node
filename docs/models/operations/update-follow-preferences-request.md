# UpdateFollowPreferencesRequest

## Example Usage

```typescript
import { UpdateFollowPreferencesRequest } from "@versedbcom/sdk/models/operations";

let value: UpdateFollowPreferencesRequest = {
  type: "title",
  id: 45,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The content type (title, character, podcast, creator, publisher, team, story_arc, comic_shop, event, user).        | title                                                                                                              |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID of the followed content.                                                                                    | 45                                                                                                                 |
| `body`                                                                                                             | [operations.UpdateFollowPreferencesRequestBody](../../models/operations/update-follow-preferences-request-body.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |