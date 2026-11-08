# GetPublisherDetailsRequest

## Example Usage

```typescript
import { GetPublisherDetailsRequest } from "@versedbcom/sdk/models/operations";

let value: GetPublisherDetailsRequest = {
  publisherId: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `publisherId`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the publisher.                                                                             | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |