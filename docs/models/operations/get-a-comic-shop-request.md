# GetAComicShopRequest

## Example Usage

```typescript
import { GetAComicShopRequest } from "@versedbcom/sdk/models/operations";

let value: GetAComicShopRequest = {
  shopId: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `shopId`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | The shop ID.                                                                                         | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |