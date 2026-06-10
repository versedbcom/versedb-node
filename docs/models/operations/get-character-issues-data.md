# GetCharacterIssuesData

## Example Usage

```typescript
import { GetCharacterIssuesData } from "@versedbcom/sdk/models/operations";

let value: GetCharacterIssuesData = {
  id: 5432,
  number: "1",
  name: "The Amazing Spider-Man #1",
  releaseDate: "2018-07-11",
  coverUrl: "https://...",
  series: {
    id: 123,
    name: "Amazing Spider-Man",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 5432                                                                                          |
| `number`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | The Amazing Spider-Man #1                                                                     |
| `releaseDate`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2018-07-11                                                                                    |
| `coverUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | https://...                                                                                   |
| `series`                                                                                      | [operations.GetCharacterIssuesSeries](../../models/operations/get-character-issues-series.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |