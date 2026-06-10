# ListCollectionRequest

## Example Usage

```typescript
import { ListCollectionRequest } from "@versedbcom/sdk/models/operations";

let value: ListCollectionRequest = {
  perPage: 20,
  page: 1,
  search: "spider",
  format: "single",
  graded: true,
  isSigned: true,
  condition: "NM",
  forSale: true,
  forTrade: true,
  readStatus: "unread",
  publisherId: 1,
  gradeMin: 9,
  gradeMax: 9.8,
  sortBy: "title",
  sortOrder: "asc",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `perPage`                                                                         | *number*                                                                          | :heavy_minus_sign:                                                                | Items per page (max 100).                                                         | 20                                                                                |
| `page`                                                                            | *number*                                                                          | :heavy_minus_sign:                                                                | Page number.                                                                      | 1                                                                                 |
| `search`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | Filter by issue name, issue number, or series name.                               | spider                                                                            |
| `format`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | Filter by stored format.                                                          | single                                                                            |
| `graded`                                                                          | *boolean*                                                                         | :heavy_minus_sign:                                                                | Filter to graded (true) or raw (false) copies.                                    | true                                                                              |
| `isSigned`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | Filter to signed (true) or unsigned (false) copies.                               | true                                                                              |
| `condition`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Filter by condition grade code.                                                   | NM                                                                                |
| `forSale`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Filter to copies marked for sale.                                                 | true                                                                              |
| `forTrade`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | Filter to copies marked for trade.                                                | true                                                                              |
| `readStatus`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | Filter by read state. One of: read, unread.                                       | unread                                                                            |
| `publisherId`                                                                     | *number*                                                                          | :heavy_minus_sign:                                                                | Filter to issues from a publisher.                                                | 1                                                                                 |
| `gradeMin`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | Filter to copies with a numeric grade at or above this value.                     | 9                                                                                 |
| `gradeMax`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | Filter to copies with a numeric grade at or below this value.                     | 9.8                                                                               |
| `sortBy`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | Sort field. One of: date_added, title, release_date, estimated_value, price_paid. | title                                                                             |
| `sortOrder`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Sort direction. One of: asc, desc.                                                | asc                                                                               |