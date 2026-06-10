# GetSeriesCharactersResponse

## Example Usage

```typescript
import { GetSeriesCharactersResponse } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCharactersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    data: [
      {
        id: 456,
        name: "Spider-Man (Peter Parker)",
        alias: "Peter Parker",
        imageUrl: "https://...",
      },
    ],
    meta: {
      currentPage: 1,
      lastPage: 2,
      perPage: 50,
      total: 75,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |                                                                                                                                                                                                     |
| `result`                                                                                                                                                                                            | [operations.GetSeriesCharactersResponseBody](../../models/operations/get-series-characters-response-body.md)                                                                                        | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 | {<br/>"data": [<br/>{<br/>"id": 456,<br/>"name": "Spider-Man (Peter Parker)",<br/>"alias": "Peter Parker",<br/>"image_url": "https://..."<br/>}<br/>],<br/>"meta": {<br/>"current_page": 1,<br/>"last_page": 2,<br/>"per_page": 50,<br/>"total": 75<br/>}<br/>} |