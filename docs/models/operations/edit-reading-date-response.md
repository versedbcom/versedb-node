# EditReadingDateResponse

## Example Usage

```typescript
import { EditReadingDateResponse } from "@versedbcom/sdk/models/operations";

let value: EditReadingDateResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `result`                                                                                             | [operations.EditReadingDateResponseBody](../../models/operations/edit-reading-date-response-body.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | {<br/>"read_at": "2026-03-01T00:00:00+00:00"<br/>}                                                   |