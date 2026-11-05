# GetCreatorDetailsRequest

## Example Usage

```typescript
import { GetCreatorDetailsRequest } from "@versedbcom/sdk/models/operations";

let value: GetCreatorDetailsRequest = {
  creatorId: 789,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `creatorId`                                                                                                                             | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The creator ID.                                                                                                                         | 789                                                                                                                                     |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |