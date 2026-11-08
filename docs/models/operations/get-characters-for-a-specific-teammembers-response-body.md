# GetCharactersForASpecificTeammembersResponseBody

Success

## Example Usage

```typescript
import { GetCharactersForASpecificTeammembersResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharactersForASpecificTeammembersResponseBody = {
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
    path: "/usr/libexec",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                             | [operations.GetCharactersForASpecificTeammembersData](../../models/operations/get-characters-for-a-specific-teammembers-data.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `links`                                                                                                                            | [operations.GetCharactersForASpecificTeammembersLinks](../../models/operations/get-characters-for-a-specific-teammembers-links.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `meta`                                                                                                                             | [operations.GetCharactersForASpecificTeammembersMeta](../../models/operations/get-characters-for-a-specific-teammembers-meta.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |