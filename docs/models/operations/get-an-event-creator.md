# GetAnEventCreator

## Example Usage

```typescript
import { GetAnEventCreator } from "@versedbcom/sdk/models/operations";

let value: GetAnEventCreator = {
  id: 7,
  name: "Stan Lee",
  slug: "stan-lee",
  photoUrl: "https://cdn.versedb.com/creators/7-profile_md.webp",
  country: "US",
  appearanceTypes: [
    "Special Guest",
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | 7                                                                     |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | Stan Lee                                                              |
| `slug`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | stan-lee                                                              |
| `photoUrl`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | https://cdn.versedb.com/creators/7-profile_md.webp                    |
| `images`                                                              | [operations.CreatorImages](../../models/operations/creator-images.md) | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `country`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | US                                                                    |
| `appearanceTypes`                                                     | *string*[]                                                            | :heavy_minus_sign:                                                    | N/A                                                                   | [<br/>"Special Guest"<br/>]                                           |