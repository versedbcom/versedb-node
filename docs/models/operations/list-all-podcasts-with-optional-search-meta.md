# ListAllPodcastsWithOptionalSearchMeta

## Example Usage

```typescript
import { ListAllPodcastsWithOptionalSearchMeta } from "@versedbcom/sdk/models/operations";

let value: ListAllPodcastsWithOptionalSearchMeta = {
  currentPage: 1,
  from: 1,
  lastPage: 25,
  links: [
    {
      url: "https://lumpy-deployment.info/",
      label: "<value>",
      active: false,
    },
  ],
  path: "/selinux",
  perPage: 20,
  to: 20,
  total: 500,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `currentPage`                                                                                                                | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 1                                                                                                                            |
| `from`                                                                                                                       | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 1                                                                                                                            |
| `lastPage`                                                                                                                   | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 25                                                                                                                           |
| `links`                                                                                                                      | [operations.ListAllPodcastsWithOptionalSearchLink](../../models/operations/list-all-podcasts-with-optional-search-link.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `path`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `perPage`                                                                                                                    | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 20                                                                                                                           |
| `to`                                                                                                                         | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 20                                                                                                                           |
| `total`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 500                                                                                                                          |