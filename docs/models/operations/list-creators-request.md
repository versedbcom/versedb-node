# ListCreatorsRequest

## Example Usage

```typescript
import { ListCreatorsRequest } from "@versedbcom/sdk/models/operations";

let value: ListCreatorsRequest = {
  q: "alan moore",
  limit: 20,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `q`                                                                                                                                     | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Search by creator name.                                                                                                                 | alan moore                                                                                                                              |
| `limit`                                                                                                                                 | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Results per page (max 50).                                                                                                              | 20                                                                                                                                      |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |