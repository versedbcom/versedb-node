# GetASpecificUniverseResponseBody

Success

## Example Usage

```typescript
import { GetASpecificUniverseResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificUniverseResponseBody = {
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.GetASpecificUniverseData](../../models/operations/get-a-specific-universe-data.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |