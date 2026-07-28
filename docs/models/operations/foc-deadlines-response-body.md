# FOCDeadlinesResponseBody

Success

## Example Usage

```typescript
import { FOCDeadlinesResponseBody } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesResponseBody = {
  data: [
    {
      id: 5432,
      number: "1",
      title: "Amazing Spider-Man",
      releaseDate: "2024-02-01",
      focDate: "2024-01-18",
      series: {
        id: 123,
        name: "Amazing Spider-Man",
      },
    },
  ],
  meta: {
    focWindowDays: 7,
    focStart: "2024-01-15",
    focEnd: "2024-01-22",
    note: "FOC dates are estimates based on release_date - 14 days",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                              | [operations.FOCDeadlinesData](../../models/operations/foc-deadlines-data.md)[]                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 | [<br/>{<br/>"id": 5432,<br/>"number": "1",<br/>"title": "Amazing Spider-Man",<br/>"cover_url": "...",<br/>"release_date": "2024-02-01",<br/>"foc_date": "2024-01-18",<br/>"series": {<br/>"id": 123,<br/>"name": "Amazing Spider-Man"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                                              | [operations.FOCDeadlinesMeta](../../models/operations/foc-deadlines-meta.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |                                                                                                                                                                                                     |