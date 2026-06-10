# Visibility

## Example Usage

```typescript
import { Visibility } from "@versedbcom/sdk/models/operations";

let value: Visibility = {
  showActivity: true,
  showCollection: true,
  showReadingList: false,
  isWishlistPublic: true,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `showActivity`     | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `showCollection`   | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `showReadingList`  | *boolean*          | :heavy_minus_sign: | N/A                | false              |
| `isWishlistPublic` | *boolean*          | :heavy_minus_sign: | N/A                | true               |