# LendACopyOutResponse

## Example Usage

```typescript
import { LendACopyOutResponse } from "@versedbcom/sdk/models/operations";

let value: LendACopyOutResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: 1001,
      loan: {
        id: 42,
        loanedTo: "Dan from the shop",
        loanedAt: "2026-09-01",
        dueAt: "2026-10-01",
        isOverdue: false,
        daysUntilDue: 30,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      | Example                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `result`                                                                                                                                                                         | [operations.LendACopyOutResponseBody](../../models/operations/lend-a-copy-out-response-body.md)                                                                                  | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              | {<br/>"data": {<br/>"id": 1001,<br/>"loan": {<br/>"id": 42,<br/>"loaned_to": "Dan from the shop",<br/>"loaned_at": "2026-09-01",<br/>"due_at": "2026-10-01",<br/>"is_overdue": false,<br/>"days_until_due": 30<br/>}<br/>}<br/>} |