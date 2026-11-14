# GetStoryArcsForASpecificCharacterResponseBody

Success

## Example Usage

```typescript
import { GetStoryArcsForASpecificCharacterResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificCharacterResponseBody = {
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
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                        | [operations.GetStoryArcsForASpecificCharacterData](../../models/operations/get-story-arcs-for-a-specific-character-data.md)[] | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `links`                                                                                                                       | [operations.GetStoryArcsForASpecificCharacterLinks](../../models/operations/get-story-arcs-for-a-specific-character-links.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `meta`                                                                                                                        | [operations.GetStoryArcsForASpecificCharacterMeta](../../models/operations/get-story-arcs-for-a-specific-character-meta.md)   | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |