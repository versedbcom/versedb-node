# GetActivityFeedData3

## Example Usage

```typescript
import { GetActivityFeedData3 } from "@versedbcom/sdk/models/operations";

let value: GetActivityFeedData3 = {
  followableType: "title",
  followableId: 123,
  name: "Spider-Man",
  imageUrl: "https://...",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `followableType`                                                          | *string*                                                                  | :heavy_check_mark:                                                        | The followed type, lower-cased (title, character, comicevent, user, ...). | title                                                                     |
| `followableId`                                                            | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       | 123                                                                       |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | The followed entity, or null when it is gone.                             | Spider-Man                                                                |
| `imageUrl`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | A followed title's cover; null for other types.                           | https://...                                                               |