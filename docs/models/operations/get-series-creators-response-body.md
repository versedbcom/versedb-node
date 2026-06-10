# GetSeriesCreatorsResponseBody

Success

## Example Usage

```typescript
import { GetSeriesCreatorsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCreatorsResponseBody = {
  data: [
    {
      id: 789,
      name: "Nick Spencer",
      role: {
        id: 1,
        name: "Writer",
      },
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 50,
    total: 15,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.GetSeriesCreatorsData](../../models/operations/get-series-creators-data.md)[] | :heavy_minus_sign:                                                                        | N/A                                                                                       | [<br/>{<br/>"id": 789,<br/>"name": "Nick Spencer",<br/>"role": {<br/>"id": 1,<br/>"name": "Writer"<br/>}<br/>}<br/>] |
| `meta`                                                                                    | [operations.GetSeriesCreatorsMeta](../../models/operations/get-series-creators-meta.md)   | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |