# ListSeriesData

## Example Usage

```typescript
import { ListSeriesData } from "@versedbcom/sdk/models/operations";

let value: ListSeriesData = {
  id: 123,
  titleId: 45,
  name: "Amazing Spider-Man",
  slug: "amazing-spider-man-2018",
  number: 6,
  startYear: 2018,
  endYear: 2022,
  coverUrl: "https://...",
  publicationType: "ongoing",
  format: "comic",
  status: "ended",
  originalLanguage: "en",
  cachedIssuesCount: 75,
  averageRating: 4.2,
  totalReviews: 150,
  ageRating: "teen",
  isNsfw: false,
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *number*                | :heavy_minus_sign:      | N/A                     | 123                     |
| `titleId`               | *number*                | :heavy_minus_sign:      | N/A                     | 45                      |
| `name`                  | *string*                | :heavy_minus_sign:      | N/A                     | Amazing Spider-Man      |
| `slug`                  | *string*                | :heavy_minus_sign:      | N/A                     | amazing-spider-man-2018 |
| `number`                | *number*                | :heavy_minus_sign:      | N/A                     | 6                       |
| `startYear`             | *number*                | :heavy_minus_sign:      | N/A                     | 2018                    |
| `endYear`               | *number*                | :heavy_minus_sign:      | N/A                     | 2022                    |
| `coverUrl`              | *string*                | :heavy_minus_sign:      | N/A                     | https://...             |
| `publicationType`       | *string*                | :heavy_minus_sign:      | N/A                     | ongoing                 |
| `format`                | *string*                | :heavy_minus_sign:      | N/A                     | comic                   |
| `status`                | *string*                | :heavy_minus_sign:      | N/A                     | ended                   |
| `originalLanguage`      | *string*                | :heavy_minus_sign:      | N/A                     | en                      |
| `cachedIssuesCount`     | *number*                | :heavy_minus_sign:      | N/A                     | 75                      |
| `averageRating`         | *number*                | :heavy_minus_sign:      | N/A                     | 4.2                     |
| `totalReviews`          | *number*                | :heavy_minus_sign:      | N/A                     | 150                     |
| `ageRating`             | *string*                | :heavy_minus_sign:      | N/A                     | teen                    |
| `isNsfw`                | *boolean*               | :heavy_minus_sign:      | N/A                     | false                   |