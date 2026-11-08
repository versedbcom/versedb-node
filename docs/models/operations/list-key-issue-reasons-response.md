# ListKeyIssueReasonsResponse

## Example Usage

```typescript
import { ListKeyIssueReasonsResponse } from "@versedbcom/sdk/models/operations";

let value: ListKeyIssueReasonsResponse = {
  headers: {
    "key": [],
  },
  result: {
    data: [
      {
        id: 1,
        name: "1st Appearance",
        category: "appearance",
        description: "First appearance of a character.",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [operations.ListKeyIssueReasonsResponseBody](../../models/operations/list-key-issue-reasons-response-body.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |