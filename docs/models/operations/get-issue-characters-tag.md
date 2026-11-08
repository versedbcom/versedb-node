# GetIssueCharactersTag

## Example Usage

```typescript
import { GetIssueCharactersTag } from "@versedbcom/sdk/models/operations";

let value: GetIssueCharactersTag = {
  id: 12,
  name: {
    "en": "Wall-crawling",
  },
  slug: {
    "en": "wall-crawling",
  },
  type: "ability",
  orderColumn: 1,
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
  pivot: {
    taggableType: "<value>",
    taggableId: 456,
    tagId: 12,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 12                                                                                                 |
| `name`                                                                                             | Record<string, *string*>                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | {<br/>"en": "Wall-crawling"<br/>}                                                                  |
| `slug`                                                                                             | Record<string, *string*>                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | {<br/>"en": "wall-crawling"<br/>}                                                                  |
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | ability                                                                                            |
| `orderColumn`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 1                                                                                                  |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 2024-01-15T10:30:00.000000Z                                                                        |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 2024-01-15T10:30:00.000000Z                                                                        |
| `pivot`                                                                                            | [operations.GetIssueCharactersTagPivot](../../models/operations/get-issue-characters-tag-pivot.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |