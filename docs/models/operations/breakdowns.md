# Breakdowns

## Example Usage

```typescript
import { Breakdowns } from "@versedbcom/sdk/models/operations";

let value: Breakdowns = {
  series: [
    {
      id: 42,
      name: "Saga",
      total: 3,
    },
  ],
  publishers: [
    {
      id: 42,
      name: "Saga",
      total: 3,
    },
  ],
  creators: [
    {
      id: 42,
      name: "Saga",
      total: 3,
    },
  ],
  genres: [],
  characters: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `series`                                                                                                                 | [operations.ViewYearlyReadingStatisticsSeries](../../models/operations/view-yearly-reading-statistics-series.md)[]       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `publishers`                                                                                                             | [operations.ViewYearlyReadingStatisticsPublisher](../../models/operations/view-yearly-reading-statistics-publisher.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `creators`                                                                                                               | [operations.ViewYearlyReadingStatisticsCreator](../../models/operations/view-yearly-reading-statistics-creator.md)[]     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `genres`                                                                                                                 | [operations.ViewYearlyReadingStatisticsGenre](../../models/operations/view-yearly-reading-statistics-genre.md)[]         | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `characters`                                                                                                             | [operations.ViewYearlyReadingStatisticsCharacter](../../models/operations/view-yearly-reading-statistics-character.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |