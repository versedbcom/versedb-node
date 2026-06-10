# GetCreatorsIssuesData

## Example Usage

```typescript
import { GetCreatorsIssuesData } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsIssuesData = {
  id: 123,
  slug: "batman-1",
  seriesId: 456,
  issueNumber: "1",
  name: "Batman #1",
  releaseDate: "2023-01-15",
  coverUrl: "https://...",
  series: {
    id: 456,
    name: "Batman",
    slug: "batman",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 123                                                                                         |
| `slug`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | batman-1                                                                                    |
| `seriesId`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 456                                                                                         |
| `issueNumber`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 1                                                                                           |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Batman #1                                                                                   |
| `releaseDate`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 2023-01-15                                                                                  |
| `coverUrl`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | https://...                                                                                 |
| `series`                                                                                    | [operations.GetCreatorsIssuesSeries](../../models/operations/get-creators-issues-series.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |