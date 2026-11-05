# GetASpecificTitleRequest

## Example Usage

```typescript
import { GetASpecificTitleRequest } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTitleRequest = {
  titleId: 148946,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `titleId`                                                                                                                               | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The ID of the title.                                                                                                                    | 148946                                                                                                                                  |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |