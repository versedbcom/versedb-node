# GetSeriesForASpecificTeamData

## Example Usage

```typescript
import { GetSeriesForASpecificTeamData } from "@versedbcom/sdk/models/operations";

let value: GetSeriesForASpecificTeamData = {
  id: 123,
  titleId: 45,
  name: "Avengers",
  slug: "avengers-2018",
  startYear: 2018,
  endYear: 2023,
  medium: "comic",
  publicationType: "regular_series",
  status: "ended",
  averageRating: 4.1,
  totalReviews: 150,
  isNsfw: false,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_minus_sign: | N/A                | 123                |
| `titleId`          | *number*           | :heavy_minus_sign: | N/A                | 45                 |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | Avengers           |
| `slug`             | *string*           | :heavy_minus_sign: | N/A                | avengers-2018      |
| `startYear`        | *number*           | :heavy_minus_sign: | N/A                | 2018               |
| `endYear`          | *number*           | :heavy_minus_sign: | N/A                | 2023               |
| `medium`           | *string*           | :heavy_minus_sign: | N/A                | comic              |
| `publicationType`  | *string*           | :heavy_minus_sign: | N/A                | regular_series     |
| `status`           | *string*           | :heavy_minus_sign: | N/A                | ended              |
| `averageRating`    | *number*           | :heavy_minus_sign: | N/A                | 4.1                |
| `totalReviews`     | *number*           | :heavy_minus_sign: | N/A                | 150                |
| `isNsfw`           | *boolean*          | :heavy_minus_sign: | N/A                | false              |