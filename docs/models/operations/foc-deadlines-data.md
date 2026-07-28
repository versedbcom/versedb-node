# FOCDeadlinesData

## Example Usage

```typescript
import { FOCDeadlinesData } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesData = {
  id: 5432,
  number: "1",
  title: "Amazing Spider-Man",
  releaseDate: "2024-02-01",
  focDate: "2024-01-18",
  series: {
    id: 123,
    name: "Amazing Spider-Man",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 5432                                                                             |
| `number`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 1                                                                                |
| `title`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Amazing Spider-Man                                                               |
| `coverUrl`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | ...                                                                              |
| `releaseDate`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 2024-02-01                                                                       |
| `focDate`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 2024-01-18                                                                       |
| `series`                                                                         | [operations.FOCDeadlinesSeries](../../models/operations/foc-deadlines-series.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |