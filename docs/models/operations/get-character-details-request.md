# GetCharacterDetailsRequest

## Example Usage

```typescript
import { GetCharacterDetailsRequest } from "@versedbcom/sdk/models/operations";

let value: GetCharacterDetailsRequest = {
  characterId: 456,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `characterId`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | The character ID.                                                                                    | 456                                                                                                  |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |