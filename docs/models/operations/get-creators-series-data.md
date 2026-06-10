# GetCreatorsSeriesData

## Example Usage

```typescript
import { GetCreatorsSeriesData } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsSeriesData = {
  id: 456,
  name: "Batman",
  slug: "batman",
  startYear: 2016,
  endYear: 2020,
  coverUrl: "https://...",
  cachedIssuesCount: 85,
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `id`                | *number*            | :heavy_minus_sign:  | N/A                 | 456                 |
| `name`              | *string*            | :heavy_minus_sign:  | N/A                 | Batman              |
| `slug`              | *string*            | :heavy_minus_sign:  | N/A                 | batman              |
| `startYear`         | *number*            | :heavy_minus_sign:  | N/A                 | 2016                |
| `endYear`           | *number*            | :heavy_minus_sign:  | N/A                 | 2020                |
| `coverUrl`          | *string*            | :heavy_minus_sign:  | N/A                 | https://...         |
| `cachedIssuesCount` | *number*            | :heavy_minus_sign:  | N/A                 | 85                  |