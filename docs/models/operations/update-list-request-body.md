# UpdateListRequestBody

## Example Usage

```typescript
import { UpdateListRequestBody } from "@versedbcom/sdk/models/operations";

let value: UpdateListRequestBody = {
  title: "Updated Title",
  description: "Updated description",
  isRanked: false,
  isPrivate: true,
  status: "published",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `title`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | The name of the list (3 to 100 characters).                                         | Updated Title                                                                       |
| `description`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | The description (up to 2000 characters).                                            | Updated description                                                                 |
| `isRanked`                                                                          | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether items are ranked.                                                           | false                                                                               |
| `isPrivate`                                                                         | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the list is private. Non-wishlist private lists require a Pro subscription. | true                                                                                |
| `status`                                                                            | [operations.Status](../../models/operations/status.md)                              | :heavy_minus_sign:                                                                  | The list status.                                                                    | published                                                                           |