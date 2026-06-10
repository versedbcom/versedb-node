# GetImprintDetailsData

## Example Usage

```typescript
import { GetImprintDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetImprintDetailsData = {
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
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 7                                                                                                 |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | Vertigo                                                                                           |
| `slug`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | vertigo                                                                                           |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | DC's mature readers imprint, home to Sandman, Preacher, and Y: The Last Man.                      |
| `publisher`                                                                                       | [operations.GetImprintDetailsPublisher](../../models/operations/get-imprint-details-publisher.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `seriesCount`                                                                                     | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 312                                                                                               |
| `titlesCount`                                                                                     | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 145                                                                                               |
| `createdAt`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 2024-01-15T12:00:00.000000Z                                                                       |
| `updatedAt`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 2024-06-01T08:30:00.000000Z                                                                       |