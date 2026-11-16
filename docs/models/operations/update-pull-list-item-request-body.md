# UpdatePullListItemRequestBody

## Example Usage

```typescript
import { UpdatePullListItemRequestBody } from "@versedbcom/sdk/models/operations";

let value: UpdatePullListItemRequestBody = {
  status: "active",
  personalNotes: "Trade wait",
  preferredCoverType: "standard_and_regular",
  pullSourceIds: [
    12,
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                      | [operations.UpdatePullListItemStatusRequest](../../models/operations/update-pull-list-item-status-request.md) | :heavy_minus_sign:                                                                                            | The entry status.                                                                                             | active                                                                                                        |
| `personalNotes`                                                                                               | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Notes on the entry.                                                                                           | Trade wait                                                                                                    |
| `preferredCoverType`                                                                                          | [operations.PreferredCoverTypeRequest](../../models/operations/preferred-cover-type-request.md)               | :heavy_minus_sign:                                                                                            | The standing cover choice; null is `standard`.                                                                | standard_and_regular                                                                                          |
| `pullSourceIds`                                                                                               | *number*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Up to three of the user's pull sources.                                                                       | [<br/>12<br/>]                                                                                                |