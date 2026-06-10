# CheckFollowStatusRequest

## Example Usage

```typescript
import { CheckFollowStatusRequest } from "@versedbcom/sdk/models/operations";

let value: CheckFollowStatusRequest = {
  type: "title",
  id: 45,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The content type (title, character, podcast, creator, publisher, team, story_arc, comic_shop, event, user). | title                                                                                                       |
| `id`                                                                                                        | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The ID of the content.                                                                                      | 45                                                                                                          |