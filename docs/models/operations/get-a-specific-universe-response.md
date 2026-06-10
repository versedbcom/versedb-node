# GetASpecificUniverseResponse

## Example Usage

```typescript
import { GetASpecificUniverseResponse } from "@versedbcom/sdk/models/operations";

let value: GetASpecificUniverseResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      id: 1,
      name: "Marvel Universe (616)",
      description:
        "The primary continuity of Marvel Comics, home to most mainline Marvel stories since 1961.",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          | Example                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                            | Record<string, *string*[]>                                                                                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |                                                                                                                                                                      |
| `result`                                                                                                                                                             | [operations.GetASpecificUniverseResponseBody](../../models/operations/get-a-specific-universe-response-body.md)                                                      | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  | {<br/>"data": {<br/>"id": 1,<br/>"name": "Marvel Universe (616)",<br/>"description": "The primary continuity of Marvel Comics, home to most mainline Marvel stories since 1961."<br/>}<br/>} |