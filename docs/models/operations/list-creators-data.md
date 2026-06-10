# ListCreatorsData

## Example Usage

```typescript
import { ListCreatorsData } from "@versedbcom/sdk/models/operations";

let value: ListCreatorsData = {
  id: 789,
  name: "Alan Moore",
  slug: "alan-moore",
  role: {
    id: 1,
    name: "Writer",
  },
  photoUrl: "https://...-full_lg.webp",
  images: {
    tileSm: "https://...-tile_sm.webp",
    profileMd: "https://...-profile_md.webp",
    fullLg: "https://...-full_lg.webp",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 789                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Alan Moore                                                                       |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | alan-moore                                                                       |
| `role`                                                                           | [operations.ListCreatorsRole](../../models/operations/list-creators-role.md)     | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `photoUrl`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | https://...-full_lg.webp                                                         |
| `images`                                                                         | [operations.ListCreatorsImages](../../models/operations/list-creators-images.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |