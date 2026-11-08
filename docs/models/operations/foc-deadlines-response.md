# FOCDeadlinesResponse

## Example Usage

```typescript
import { FOCDeadlinesResponse } from "@versedbcom/sdk/models/operations";

let value: FOCDeadlinesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [],
    meta: {
      currentPage: 1,
      perPage: 10,
      total: 28,
      lastPage: 3,
      focWindowDays: 7,
      focStart: "2026-03-15",
      focEnd: "2026-03-22",
      sort: "foc_date",
      note: "FOC dates are estimates based on release_date - 14 days",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [operations.FOCDeadlinesResponseBody](../../models/operations/foc-deadlines-response-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |