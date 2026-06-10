# AddItemToListRequestBody

## Example Usage

```typescript
import { AddItemToListRequestBody } from "@versedbcom/sdk/models/operations";

let value: AddItemToListRequestBody = {
  entityId: 5432,
  position: 1,
  note: "My favorite issue!",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `entityId`                                   | *number*                                     | :heavy_check_mark:                           | The entity ID to add.                        | 5432                                         |
| `position`                                   | *number*                                     | :heavy_minus_sign:                           | Position in list (auto-assigned if omitted). | 1                                            |
| `note`                                       | *string*                                     | :heavy_minus_sign:                           | Personal note for this item (max 500 chars). | My favorite issue!                           |