# Upcoming1IssuesData

## Example Usage

```typescript
import { Upcoming1IssuesData } from "@versedbcom/sdk/models/operations";

let value: Upcoming1IssuesData = {
  id: 9876,
  number: "1",
  title: "New Series #1",
  releaseDate: "2024-02-15",
  series: {
    id: 456,
    name: "New Series",
    status: "ongoing",
    publicationType: "regular",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 9876                                                                                   |
| `number`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 1                                                                                      |
| `title`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | New Series #1                                                                          |
| `coverUrl`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | ...                                                                                    |
| `releaseDate`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2024-02-15                                                                             |
| `series`                                                                               | [operations.Upcoming1IssuesSeries](../../models/operations/upcoming1-issues-series.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |