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
      name: "Marvel Universe",
      nameI18n: {
        "ja": {
          value: "講談社",
          source: "madb",
          reading: "こうだんしゃ",
        },
      },
      aliasesI18n: {
        "en": [
          "Kodansha Comics",
        ],
      },
      originalLocale: "en",
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `result`                                                                                                        | [operations.GetASpecificUniverseResponseBody](../../models/operations/get-a-specific-universe-response-body.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |