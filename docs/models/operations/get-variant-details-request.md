# GetVariantDetailsRequest

## Example Usage

```typescript
import { GetVariantDetailsRequest } from "@versedbcom/sdk/models/operations";

let value: GetVariantDetailsRequest = {
  issueId: 5432,
  variantId: 9001,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                                                               | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The issue ID.                                                                                                                           | 5432                                                                                                                                    |
| `variantId`                                                                                                                             | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The variant ID.                                                                                                                         | 9001                                                                                                                                    |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |