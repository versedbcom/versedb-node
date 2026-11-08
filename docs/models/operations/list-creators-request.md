# ListCreatorsRequest

## Example Usage

```typescript
import { ListCreatorsRequest } from "@versedbcom/sdk/models/operations";

let value: ListCreatorsRequest = {
  q: "alan moore",
  roleIds: "1,3",
  sort: "name",
  limit: 20,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `q`                                                                                                   | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Search by creator name.                                                                               | alan moore                                                                                            |
| `roleIds`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Comma-separated creator role IDs. Returns creators with any of them as a primary role or on a credit. | 1,3                                                                                                   |
| `sort`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Pass any value to replace the relevance ordering applied to q results with the name.                  | name                                                                                                  |
| `limit`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Results per page (max 50).                                                                            | 20                                                                                                    |
| `page`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Page number; meta.last_page says where the list ends.                                                 | 1                                                                                                     |
| `languages`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes.  | ja,ko                                                                                                 |