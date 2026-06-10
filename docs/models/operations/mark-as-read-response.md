# MarkAsReadResponse

## Example Usage

```typescript
import { MarkAsReadResponse } from "@versedbcom/sdk/models/operations";

let value: MarkAsReadResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `result`                                                                                   | [operations.MarkAsReadResponseBody](../../models/operations/mark-as-read-response-body.md) | :heavy_check_mark:                                                                         | N/A                                                                                        | {}                                                                                         |