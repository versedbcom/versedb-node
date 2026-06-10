# ListIssuesData

## Example Usage

```typescript
import { ListIssuesData } from "@versedbcom/sdk/models/operations";

let value: ListIssuesData = {
  id: 5432,
  slug: "amazing-spider-man-1",
  seriesId: 123,
  issueNumber: "1",
  name: "The Amazing Spider-Man #1",
  releaseDate: "2018-07-11",
  coverUrl: "https://...",
  isReprint: false,
  ageRating: "teen",
  isNsfw: false,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `id`                      | *number*                  | :heavy_minus_sign:        | N/A                       | 5432                      |
| `slug`                    | *string*                  | :heavy_minus_sign:        | N/A                       | amazing-spider-man-1      |
| `seriesId`                | *number*                  | :heavy_minus_sign:        | N/A                       | 123                       |
| `issueNumber`             | *string*                  | :heavy_minus_sign:        | N/A                       | 1                         |
| `name`                    | *string*                  | :heavy_minus_sign:        | N/A                       | The Amazing Spider-Man #1 |
| `releaseDate`             | *string*                  | :heavy_minus_sign:        | N/A                       | 2018-07-11                |
| `coverUrl`                | *string*                  | :heavy_minus_sign:        | N/A                       | https://...               |
| `isReprint`               | *boolean*                 | :heavy_minus_sign:        | N/A                       | false                     |
| `ageRating`               | *string*                  | :heavy_minus_sign:        | N/A                       | teen                      |
| `isNsfw`                  | *boolean*                 | :heavy_minus_sign:        | N/A                       | false                     |