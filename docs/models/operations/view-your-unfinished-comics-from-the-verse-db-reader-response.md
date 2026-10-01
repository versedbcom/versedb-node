# ViewYourUnfinishedComicsFromTheVerseDBReaderResponse

## Example Usage

```typescript
import { ViewYourUnfinishedComicsFromTheVerseDBReaderResponse } from "@versedbcom/sdk/models/operations";

let value: ViewYourUnfinishedComicsFromTheVerseDBReaderResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: [],
    meta: {
      currentPage: 1,
      lastPage: 1,
      perPage: 12,
      total: 0,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          | Example                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                            | Record<string, *string*[]>                                                                                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |                                                                                                                                                                      |
| `result`                                                                                                                                                             | [operations.ViewYourUnfinishedComicsFromTheVerseDBReaderResponseBody](../../models/operations/view-your-unfinished-comics-from-the-verse-db-reader-response-body.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  | {<br/>"data": [],<br/>"meta": {<br/>"current_page": 1,<br/>"last_page": 1,<br/>"per_page": 12,<br/>"total": 0<br/>}<br/>}                                            |