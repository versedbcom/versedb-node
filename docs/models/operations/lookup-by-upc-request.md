# LookupByUPCRequest

## Example Usage

```typescript
import { LookupByUPCRequest } from "@versedbcom/sdk/models/operations";

let value: LookupByUPCRequest = {
  upc: "75960608936700111",
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `upc`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | The UPC barcode.                                                                                     | 75960608936700111                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |