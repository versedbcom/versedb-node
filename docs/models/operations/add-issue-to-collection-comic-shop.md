# AddIssueToCollectionComicShop

The shop the copy came from, while it is listed; left out otherwise and for a `read:showcase` token.

## Example Usage

```typescript
import { AddIssueToCollectionComicShop } from "@versedbcom/sdk/models/operations";

let value: AddIssueToCollectionComicShop = {
  id: 17,
  name: "Comic Corner",
  slug: "comic-corner",
  city: "Portland",
  stateProvince: "OR",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_check_mark: | N/A                | 17                 |
| `name`             | *string*           | :heavy_check_mark: | N/A                | Comic Corner       |
| `slug`             | *string*           | :heavy_check_mark: | N/A                | comic-corner       |
| `city`             | *string*           | :heavy_check_mark: | N/A                | Portland           |
| `stateProvince`    | *string*           | :heavy_check_mark: | N/A                | OR                 |