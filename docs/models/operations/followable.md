# Followable

The followed entity, or null when it is gone.

## Example Usage

```typescript
import { Followable } from "@versedbcom/sdk/models/operations";

let value: Followable = {
  id: 123,
  name: "Spider-Man",
  slug: "spider-man",
  username: "reader42",
  imageUrl: "https://...",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *number*                                     | :heavy_check_mark:                           | N/A                                          | 123                                          |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          | Spider-Man                                   |
| `slug`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          | spider-man                                   |
| `username`                                   | *string*                                     | :heavy_check_mark:                           | A member's username; null for anything else. | reader42                                     |
| `imageUrl`                                   | *string*                                     | :heavy_check_mark:                           | N/A                                          | https://...                                  |