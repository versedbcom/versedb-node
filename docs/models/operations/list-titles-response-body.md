# ListTitlesResponseBody

Success

## Example Usage

```typescript
import { ListTitlesResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListTitlesResponseBody = {
  data: [],
  links: {
    first: "<value>",
    last: "<value>",
    prev: "<value>",
    next: "<value>",
  },
  meta: {
    currentPage: 1,
    from: 1,
    lastPage: 25,
    links: [],
    path: "/var/yp",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [operations.ListTitlesData](../../models/operations/list-titles-data.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `links`                                                                    | [operations.ListTitlesLinks](../../models/operations/list-titles-links.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `meta`                                                                     | [operations.ListTitlesMeta](../../models/operations/list-titles-meta.md)   | :heavy_check_mark:                                                         | N/A                                                                        |