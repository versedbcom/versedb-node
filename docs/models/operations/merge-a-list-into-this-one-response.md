# MergeAListIntoThisOneResponse

## Example Usage

```typescript
import { MergeAListIntoThisOneResponse } from "@versedbcom/sdk/models/operations";

let value: MergeAListIntoThisOneResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                | Example                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                  | Record<string, *string*[]>                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |                                                                                                                                                                                            |
| `result`                                                                                                                                                                                   | [operations.MergeAListIntoThisOneResponseBody](../../models/operations/merge-a-list-into-this-one-response-body.md)                                                                        | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        | {<br/>"data": {<br/>"id": 101,<br/>"title": "Best Batman Runs",<br/>"item_types": [<br/>"issues"<br/>]<br/>},<br/>"merge": {<br/>"moved": 4,<br/>"skipped_duplicates": 1,<br/>"converted_to_mixed": false,<br/>"source_deleted": false<br/>}<br/>} |