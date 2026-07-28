# ConvertAListToMixedResponse

## Example Usage

```typescript
import { ConvertAListToMixedResponse } from "@versedbcom/sdk/models/operations";

let value: ConvertAListToMixedResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: 101,
      entityType: "mixed",
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `result`                                                                                                       | [operations.ConvertAListToMixedResponseBody](../../models/operations/convert-a-list-to-mixed-response-body.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            | {<br/>"data": {<br/>"id": 101,<br/>"entity_type": "mixed"<br/>}<br/>}                                          |