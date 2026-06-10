# GetImprintDetailsResponseBody

Success

## Example Usage

```typescript
import { GetImprintDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetImprintDetailsResponseBody = {
  data: {
    id: 7,
    name: "Vertigo",
    slug: "vertigo",
    description:
      "DC's mature readers imprint, home to Sandman, Preacher, and Y: The Last Man.",
    publisher: {
      id: 2,
      name: "DC Comics",
      slug: "dc-comics",
    },
    seriesCount: 312,
    titlesCount: 145,
    createdAt: "2024-01-15T12:00:00.000000Z",
    updatedAt: "2024-06-01T08:30:00.000000Z",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.GetImprintDetailsData](../../models/operations/get-imprint-details-data.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |