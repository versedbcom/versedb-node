# ListSeriesRequest

## Example Usage

```typescript
import { ListSeriesRequest } from "@versedbcom/sdk/models/operations";

let value: ListSeriesRequest = {
  q: "spider-man",
  titleId: 1,
  sort: "start_year",
  direction: "desc",
  limit: 20,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `q`                                                                    | *string*                                                               | :heavy_minus_sign:                                                     | Search by series name.                                                 | spider-man                                                             |
| `titleId`                                                              | *number*                                                               | :heavy_minus_sign:                                                     | Filter by title ID.                                                    | 1                                                                      |
| `sort`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Sort field (name, start_year, created_at, updated_at, average_rating). | start_year                                                             |
| `direction`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Sort direction (asc, desc).                                            | desc                                                                   |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Number of results per page (max 50).                                   | 20                                                                     |