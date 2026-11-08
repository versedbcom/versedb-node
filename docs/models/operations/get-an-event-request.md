# GetAnEventRequest

## Example Usage

```typescript
import { GetAnEventRequest } from "@versedbcom/sdk/models/operations";

let value: GetAnEventRequest = {
  eventId: 42,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | The event ID.                                                                                        | 42                                                                                                   |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |