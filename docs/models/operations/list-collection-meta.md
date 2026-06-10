# ListCollectionMeta

## Example Usage

```typescript
import { ListCollectionMeta } from "@versedbcom/sdk/models/operations";

let value: ListCollectionMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 5,
  perPage: 20,
  to: 20,
  total: 100,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `currentPage`      | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `from`             | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `lastPage`         | *number*           | :heavy_minus_sign: | N/A                | 5                  |
| `path`             | *string*           | :heavy_minus_sign: | N/A                | ...                |
| `perPage`          | *number*           | :heavy_minus_sign: | N/A                | 20                 |
| `to`               | *number*           | :heavy_minus_sign: | N/A                | 20                 |
| `total`            | *number*           | :heavy_minus_sign: | N/A                | 100                |