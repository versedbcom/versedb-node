# LendACopyOutVariant

The catalog variant `variant_id` names, while it is a live variant of the copy's issue; null for any other copy.

## Example Usage

```typescript
import { LendACopyOutVariant } from "@versedbcom/sdk/models/operations";

let value: LendACopyOutVariant = {
  id: 789,
  name: "Cover B",
  type: "cover_variant",
  coverUrl: "https://...-cover_md.webp",
  coverUrlLg: "https://...-cover_lg.webp",
  ratio: "1:25",
  printing: 1,
  isNsfw: true,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | 789                                                                         |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | Cover B                                                                     |
| `type`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | The variant's `variant_type`.                                               | cover_variant                                                               |
| `coverUrl`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | https://...-cover_md.webp                                                   |
| `coverUrlLg`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | https://...-cover_lg.webp                                                   |
| `ratio`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | 1:25                                                                        |
| `printing`                                                                  | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | 1                                                                           |
| `isNsfw`                                                                    | *boolean*                                                                   | :heavy_check_mark:                                                          | The variant cover's own flag, or the issue's when the variant has no cover. |                                                                             |