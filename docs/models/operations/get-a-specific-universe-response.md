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
      nameI18n: {},
      aliasesI18n: {},
      originalLocale: "en",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                              | Record<string, *string*[]>                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `result`                                                                                                               | [operations.GetASpecificUniverseResponseBody](../../models/operations/get-a-specific-universe-response-body.md)        | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | {<br/>"data": {<br/>"id": 1,<br/>"name": "Marvel Universe (616)",<br/>"name_i18n": {},<br/>"aliases_i18n": {},<br/>"original_locale": "en"<br/>}<br/>} |