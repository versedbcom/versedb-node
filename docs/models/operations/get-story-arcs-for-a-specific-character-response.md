# GetStoryArcsForASpecificCharacterResponse

## Example Usage

```typescript
import { GetStoryArcsForASpecificCharacterResponse } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificCharacterResponse = {
  headers: {},
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
      path: "/selinux",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                    | Record<string, *string*[]>                                                                                                                   | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `result`                                                                                                                                     | [operations.GetStoryArcsForASpecificCharacterResponseBody](../../models/operations/get-story-arcs-for-a-specific-character-response-body.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |