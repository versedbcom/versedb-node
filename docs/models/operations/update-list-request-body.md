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

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `title`                                                | *string*                                               | :heavy_minus_sign:                                     | List title (max 100 chars).                            | Updated Title                                          |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | List description (max 500 chars).                      | Updated description                                    |
| `isRanked`                                             | *boolean*                                              | :heavy_minus_sign:                                     | Whether items are ranked.                              | false                                                  |
| `isPrivate`                                            | *boolean*                                              | :heavy_minus_sign:                                     | Whether the list is private.                           | true                                                   |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_minus_sign:                                     | The list status. One of: `published`, `draft`.         | published                                              |