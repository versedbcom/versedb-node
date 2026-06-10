# GetKeyIssueReasonsResponse

## Example Usage

```typescript
import { GetKeyIssueReasonsResponse } from "@versedbcom/sdk/models/operations";

let value: GetKeyIssueReasonsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    data: [
      {
        id: 1,
        name: "1st Appearance",
        category: "appearance",
        description: "First appearance of a character",
        notes: "1st full appearance of Wolverine (Logan)",
        source: "manual",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                | Example                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                  | Record<string, *string*[]>                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |                                                                                                                                                                                                            |
| `result`                                                                                                                                                                                                   | [operations.GetKeyIssueReasonsResponseBody](../../models/operations/get-key-issue-reasons-response-body.md)                                                                                                | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        | {<br/>"data": [<br/>{<br/>"id": 1,<br/>"name": "1st Appearance",<br/>"category": "appearance",<br/>"description": "First appearance of a character",<br/>"notes": "1st full appearance of Wolverine (Logan)",<br/>"source": "manual"<br/>}<br/>]<br/>} |