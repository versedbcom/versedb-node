# GetCharacterSeriesMeta

## Example Usage

```typescript
import { GetCharacterSeriesMeta } from "@versedbcom/sdk/models/operations";

let value: GetCharacterSeriesMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://steel-case.name/",
      label: "<value>",
      active: false,
    },
  ],
  path: "/usr/include",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `currentPage`                                                                               | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 1                                                                                           |
| `from`                                                                                      | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 1                                                                                           |
| `lastPage`                                                                                  | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 25                                                                                          |
| `links`                                                                                     | [operations.GetCharacterSeriesLink](../../models/operations/get-character-series-link.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `path`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `perPage`                                                                                   | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 20                                                                                          |
| `to`                                                                                        | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 20                                                                                          |
| `total`                                                                                     | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 500                                                                                         |