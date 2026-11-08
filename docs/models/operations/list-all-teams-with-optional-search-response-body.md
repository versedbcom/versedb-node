# ListAllTeamsWithOptionalSearchResponseBody

Success

## Example Usage

```typescript
import { ListAllTeamsWithOptionalSearchResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListAllTeamsWithOptionalSearchResponseBody = {
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
    links: [
      {
        url: "https://pushy-mobility.net/",
        label: "<value>",
        active: false,
      },
    ],
    path: "/opt",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                 | [operations.ListAllTeamsWithOptionalSearchData](../../models/operations/list-all-teams-with-optional-search-data.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `links`                                                                                                                | [operations.ListAllTeamsWithOptionalSearchLinks](../../models/operations/list-all-teams-with-optional-search-links.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `meta`                                                                                                                 | [operations.ListAllTeamsWithOptionalSearchMeta](../../models/operations/list-all-teams-with-optional-search-meta.md)   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |