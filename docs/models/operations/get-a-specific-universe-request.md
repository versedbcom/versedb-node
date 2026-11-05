# GetASpecificUniverseRequest

## Example Usage

```typescript
import { GetASpecificUniverseRequest } from "@versedbcom/sdk/models/operations";

let value: GetASpecificUniverseRequest = {
  universeId: 16,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `universeId`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The ID of the universe.                                                                                                                 | 16                                                                                                                                      |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |