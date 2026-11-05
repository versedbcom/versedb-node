# ListUniversesRequest

## Example Usage

```typescript
import { ListUniversesRequest } from "@versedbcom/sdk/models/operations";

let value: ListUniversesRequest = {
  q: "marvel",
  limit: 20,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `q`                                                                                                                                     | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Search by universe name.                                                                                                                | marvel                                                                                                                                  |
| `limit`                                                                                                                                 | *number*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Number of results per page (max 50).                                                                                                    | 20                                                                                                                                      |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |