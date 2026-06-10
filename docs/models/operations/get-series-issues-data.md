# GetSeriesIssuesData

## Example Usage

```typescript
import { GetSeriesIssuesData } from "@versedbcom/sdk/models/operations";

let value: GetSeriesIssuesData = {
  id: 5432,
  number: "1",
  name: "The Amazing Spider-Man #1",
  releaseDate: "2018-07-11",
  coverUrl: "https://...",
  averageRating: 4.5,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `id`                      | *number*                  | :heavy_minus_sign:        | N/A                       | 5432                      |
| `number`                  | *string*                  | :heavy_minus_sign:        | N/A                       | 1                         |
| `name`                    | *string*                  | :heavy_minus_sign:        | N/A                       | The Amazing Spider-Man #1 |
| `releaseDate`             | *string*                  | :heavy_minus_sign:        | N/A                       | 2018-07-11                |
| `coverUrl`                | *string*                  | :heavy_minus_sign:        | N/A                       | https://...               |
| `averageRating`           | *number*                  | :heavy_minus_sign:        | N/A                       | 4.5                       |