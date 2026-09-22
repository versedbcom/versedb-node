# MarkTheCopysOpenLoanReturnedResponse

## Example Usage

```typescript
import { MarkTheCopysOpenLoanReturnedResponse } from "@versedbcom/sdk/models/operations";

let value: MarkTheCopysOpenLoanReturnedResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: 1001,
      loan: null,
    },
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                         | Record<string, *string*[]>                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |
| `result`                                                                                                                          | [operations.MarkTheCopysOpenLoanReturnedResponseBody](../../models/operations/mark-the-copys-open-loan-returned-response-body.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               | {<br/>"data": {<br/>"id": 1001,<br/>"loan": null<br/>}<br/>}                                                                      |