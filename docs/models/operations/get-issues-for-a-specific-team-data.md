# GetIssuesForASpecificTeamData

## Example Usage

```typescript
import { GetIssuesForASpecificTeamData } from "@versedbcom/sdk/models/operations";

let value: GetIssuesForASpecificTeamData = {
  id: 5432,
  seriesId: 123,
  issueNumber: "1",
  name: "The Final Host",
  releaseDate: "2018-05-02",
  coverDate: "2018-07-01",
  averageRating: 4.3,
  isNsfw: false,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_minus_sign: | N/A                | 5432               |
| `seriesId`         | *number*           | :heavy_minus_sign: | N/A                | 123                |
| `issueNumber`      | *string*           | :heavy_minus_sign: | N/A                | 1                  |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | The Final Host     |
| `releaseDate`      | *string*           | :heavy_minus_sign: | N/A                | 2018-05-02         |
| `coverDate`        | *string*           | :heavy_minus_sign: | N/A                | 2018-07-01         |
| `averageRating`    | *number*           | :heavy_minus_sign: | N/A                | 4.3                |
| `isNsfw`           | *boolean*          | :heavy_minus_sign: | N/A                | false              |