# ListKeyIssueReasonsResponse

## Example Usage

```typescript
import { ListKeyIssueReasonsResponse } from "@versedbcom/sdk/models/operations";

let value: ListKeyIssueReasonsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: [
      {
        id: 1,
        name: "1st Appearance",
        category: "appearance",
        description: "First appearance of a character",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                         | Record<string, *string*[]>                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |
| `result`                                                                                                                          | [operations.ListKeyIssueReasonsResponseBody](../../models/operations/list-key-issue-reasons-response-body.md)                     | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               | {<br/>"data": [<br/>{<br/>"id": 1,<br/>"name": "1st Appearance",<br/>"category": "appearance",<br/>"description": "First appearance of a character"<br/>}<br/>]<br/>} |