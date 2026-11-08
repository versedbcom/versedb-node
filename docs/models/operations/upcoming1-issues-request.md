# Upcoming1IssuesRequest

## Example Usage

```typescript
import { Upcoming1IssuesRequest } from "@versedbcom/sdk/models/operations";

let value: Upcoming1IssuesRequest = {
  limit: 10,
  page: 1,
  days: 60,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `limit`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Results per page (1-50).                                                                             | 10                                                                                                   |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Page number; meta.last_page says where the list ends.                                                | 1                                                                                                    |
| `days`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Lookahead window in days (1-90).                                                                     | 60                                                                                                   |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |