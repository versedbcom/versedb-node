# FollowUpdatesRequest

## Example Usage

```typescript
import { FollowUpdatesRequest } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesRequest = {
  days: 30,
  page: 1,
  perPage: 20,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `days`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Lookback window in days (1-90).                                                                      | 30                                                                                                   |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Page number for pagination.                                                                          | 1                                                                                                    |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Items per page (1-50).                                                                               | 20                                                                                                   |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |