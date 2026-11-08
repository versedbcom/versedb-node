# ReorderItemsResponseBody

Reordered.

## Example Usage

```typescript
import { ReorderItemsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ReorderItemsResponseBody = {
  message: "Items reordered successfully.",
  items: [
    {
      id: 1,
      position: 1,
      note: "Classic!",
      createdAt: "2024-01-15T10:30:00+00:00",
      updatedAt: "2024-01-15T10:30:00+00:00",
      variantId: 7,
      variant: {
        id: 7,
        name: "Virgin Variant",
        ratio: "1:25",
        coverImageUrl: "https://...-cover_md.webp",
      },
      entityType: "issues",
      entity: {
        id: 6,
        slug: "kraven-s-last-hunt",
        name: "Kraven's Last Hunt",
        imageUrl: "https://...-cover_md.webp",
        issuesCount: 6,
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `message`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | Items reordered successfully.                                                  |
| `items`                                                                        | [operations.ReorderItemsItem](../../models/operations/reorder-items-item.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |