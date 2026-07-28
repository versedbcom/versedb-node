# MergeAListIntoThisOneResponseBody

Merged

## Example Usage

```typescript
import { MergeAListIntoThisOneResponseBody } from "@versedbcom/sdk/models/operations";

let value: MergeAListIntoThisOneResponseBody = {
  data: {
    id: 101,
    title: "Best Batman Runs",
    itemTypes: [
      "issues",
    ],
  },
  merge: {
    moved: 4,
    skippedDuplicates: 1,
    convertedToMixed: false,
    sourceDeleted: false,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [operations.MergeAListIntoThisOneData](../../models/operations/merge-a-list-into-this-one-data.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `merge`                                                                                            | [operations.Merge](../../models/operations/merge.md)                                               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |