# GetImprintDetailsResponseBody

Success

## Example Usage

```typescript
import { GetImprintDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetImprintDetailsResponseBody = {
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
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.GetImprintDetailsData](../../models/operations/get-imprint-details-data.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |