# LookupByISBNRequest

## Example Usage

```typescript
import { LookupByISBNRequest } from "@versedbcom/sdk/models/operations";

let value: LookupByISBNRequest = {
  isbn: "978-1302913847",
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `isbn`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ISBN (10 or 13 digits).                                                                          | 978-1302913847                                                                                       |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |