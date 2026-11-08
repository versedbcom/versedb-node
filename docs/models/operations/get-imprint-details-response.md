# GetImprintDetailsResponse

## Example Usage

```typescript
import { GetImprintDetailsResponse } from "@versedbcom/sdk/models/operations";

let value: GetImprintDetailsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    data: {
      id: 1,
      name: "Vertigo",
      slug: "vertigo",
      publisher: {
        id: 2,
        name: "DC Comics",
        slug: "dc-comics",
      },
      seriesCount: 240,
      titlesCount: 180,
      createdAt: "2024-01-15T10:30:00.000000Z",
      updatedAt: "2024-01-15T10:30:00.000000Z",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.GetImprintDetailsResponseBody](../../models/operations/get-imprint-details-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |