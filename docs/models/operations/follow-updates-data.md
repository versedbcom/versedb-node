# FollowUpdatesData

## Example Usage

```typescript
import { FollowUpdatesData } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesData = {
  id: 5432,
  issueNumber: "26",
  releaseDate: "2026-03-04",
  series: {
    id: 123,
    name: "X-Men",
    startYear: 2024,
  },
  followContext: "New in X-Men",
  followType: "title",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | 5432                                                                               |
| `issueNumber`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | 26                                                                                 |
| `coverUrl`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | ...                                                                                |
| `releaseDate`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | 2026-03-04                                                                         |
| `series`                                                                           | [operations.FollowUpdatesSeries](../../models/operations/follow-updates-series.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `followContext`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | New in X-Men                                                                       |
| `followType`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | title                                                                              |