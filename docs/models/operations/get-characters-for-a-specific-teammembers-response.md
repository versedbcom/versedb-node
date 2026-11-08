# GetCharactersForASpecificTeammembersResponse

## Example Usage

```typescript
import { GetCharactersForASpecificTeammembersResponse } from "@versedbcom/sdk/models/operations";

let value: GetCharactersForASpecificTeammembersResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                         | Record<string, *string*[]>                                                                                                                        | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |
| `result`                                                                                                                                          | [operations.GetCharactersForASpecificTeammembersResponseBody](../../models/operations/get-characters-for-a-specific-teammembers-response-body.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |