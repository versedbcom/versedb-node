# UpdatePullListItemResponse

## Example Usage

```typescript
import { UpdatePullListItemResponse } from "@versedbcom/sdk/models/operations";

let value: UpdatePullListItemResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: 625289,
    seriesId: 408643,
    status: "canceled",
    personalNotes: "<value>",
    preferredCoverType: "standard_and_regular",
    pullSourceId: 648847,
    pullSourceIds: [
      219182,
      355833,
    ],
    updatedAt: "1735636269720",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [operations.UpdatePullListItemResponseBody](../../models/operations/update-pull-list-item-response-body.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |