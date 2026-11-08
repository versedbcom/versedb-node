# MergeAListIntoThisOneClonedFrom

The list this one was cloned from, while it exists.

## Example Usage

```typescript
import { MergeAListIntoThisOneClonedFrom } from "@versedbcom/sdk/models/operations";

let value: MergeAListIntoThisOneClonedFrom = {
  id: 77,
  title: "Spider-Man Essentials",
  slug: "spider-man-essentials",
  user: {
    id: 9,
    username: "webhead",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      | 77                                                                                                                       |
| `title`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      | Spider-Man Essentials                                                                                                    |
| `slug`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      | spider-man-essentials                                                                                                    |
| `user`                                                                                                                   | [operations.MergeAListIntoThisOneClonedFromUser](../../models/operations/merge-a-list-into-this-one-cloned-from-user.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |