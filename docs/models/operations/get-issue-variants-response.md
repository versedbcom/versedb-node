# GetIssueVariantsResponse

## Example Usage

```typescript
import { GetIssueVariantsResponse } from "@versedbcom/sdk/models/operations";

let value: GetIssueVariantsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: [],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [operations.GetIssueVariantsResponseBody](../../models/operations/get-issue-variants-response-body.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |