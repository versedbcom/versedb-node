# ListTitlesMeta

## Example Usage

```typescript
import { ListTitlesMeta } from "@versedbcom/sdk/models/operations";

let value: ListTitlesMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://wordy-ghost.biz",
      label: "<value>",
      active: true,
    },
  ],
  path: "/home",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `currentPage`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 1                                                                          |
| `from`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 1                                                                          |
| `lastPage`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 25                                                                         |
| `links`                                                                    | [operations.ListTitlesLink](../../models/operations/list-titles-link.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `path`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `perPage`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 20                                                                         |
| `to`                                                                       | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 20                                                                         |
| `total`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 500                                                                        |