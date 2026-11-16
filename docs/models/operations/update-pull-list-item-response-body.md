# UpdatePullListItemResponseBody

Updated

## Example Usage

```typescript
import { UpdatePullListItemResponseBody } from "@versedbcom/sdk/models/operations";

let value: UpdatePullListItemResponseBody = {
  id: 204641,
  seriesId: 54034,
  status: "paused",
  personalNotes: "<value>",
  preferredCoverType: null,
  pullSourceId: 353348,
  pullSourceIds: [
    907896,
  ],
  updatedAt: "1735661348775",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                      | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `seriesId`                                                                                                                                | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `status`                                                                                                                                  | [operations.StatusResponse](../../models/operations/status-response.md)                                                                   | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `personalNotes`                                                                                                                           | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `preferredCoverType`                                                                                                                      | [operations.UpdatePullListItemPreferredCoverTypeResponse](../../models/operations/update-pull-list-item-preferred-cover-type-response.md) | :heavy_check_mark:                                                                                                                        | The standing cover choice; null is `standard`.                                                                                            |
| `pullSourceId`                                                                                                                            | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `pullSourceIds`                                                                                                                           | *number*[]                                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `updatedAt`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |