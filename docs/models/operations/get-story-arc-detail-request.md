# GetStoryArcDetailRequest

## Example Usage

```typescript
import { GetStoryArcDetailRequest } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcDetailRequest = {
  storyArcId: 16,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `storyArcId`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The story arc ID.                                                                                                                       | 16                                                                                                                                      |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |