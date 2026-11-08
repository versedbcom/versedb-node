# ListPullListRequest

## Example Usage

```typescript
import { ListPullListRequest } from "@versedbcom/sdk/models/operations";

let value: ListPullListRequest = {
  perPage: 20,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Items per page (max 100).                                                                            | 20                                                                                                   |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Page number; meta.last_page says where the list ends.                                                | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |