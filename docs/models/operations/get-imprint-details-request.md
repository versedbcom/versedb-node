# GetImprintDetailsRequest

## Example Usage

```typescript
import { GetImprintDetailsRequest } from "@versedbcom/sdk/models/operations";

let value: GetImprintDetailsRequest = {
  imprintId: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `imprintId`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the imprint.                                                                               | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |