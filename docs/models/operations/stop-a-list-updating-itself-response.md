# StopAListUpdatingItselfResponse

## Example Usage

```typescript
import { StopAListUpdatingItselfResponse } from "@versedbcom/sdk/models/operations";

let value: StopAListUpdatingItselfResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                              | Record<string, *string*[]>                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `result`                                                                                                               | [operations.StopAListUpdatingItselfResponseBody](../../models/operations/stop-a-list-updating-itself-response-body.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | {<br/>"data": {<br/>"id": 101,<br/>"entity_type": "mixed"<br/>}<br/>}                                                  |