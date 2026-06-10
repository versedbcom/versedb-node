# GetIssueCharactersResponse

## Example Usage

```typescript
import { GetIssueCharactersResponse } from "@versedbcom/sdk/models/operations";

let value: GetIssueCharactersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
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
      lastPage: 1,
      perPage: 50,
      total: 15,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |                                                                                                                                                                                                     |
| `result`                                                                                                                                                                                            | [operations.GetIssueCharactersResponseBody](../../models/operations/get-issue-characters-response-body.md)                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 | {<br/>"data": [<br/>{<br/>"id": 456,<br/>"name": "Spider-Man (Peter Parker)",<br/>"alias": "Peter Parker",<br/>"image_url": "https://..."<br/>}<br/>],<br/>"meta": {<br/>"current_page": 1,<br/>"last_page": 1,<br/>"per_page": 50,<br/>"total": 15<br/>}<br/>} |