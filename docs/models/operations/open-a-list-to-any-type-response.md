# OpenAListToAnyTypeResponse

## Example Usage

```typescript
import { OpenAListToAnyTypeResponse } from "@versedbcom/sdk/models/operations";

let value: OpenAListToAnyTypeResponse = {
  headers: {
    "key": [],
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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `result`                                                                                                      | [operations.OpenAListToAnyTypeResponseBody](../../models/operations/open-a-list-to-any-type-response-body.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           | {<br/>"data": {<br/>"id": 101,<br/>"entity_type": "mixed"<br/>}<br/>}                                         |