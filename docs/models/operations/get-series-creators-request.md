# GetSeriesCreatorsRequest

## Example Usage

```typescript
import { GetSeriesCreatorsRequest } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCreatorsRequest = {
  id: 123,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                    | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The series ID.                                                                                                                          | 123                                                                                                                                     |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |