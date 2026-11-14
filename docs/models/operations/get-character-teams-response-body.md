# GetCharacterTeamsResponseBody

Success

## Example Usage

```typescript
import { GetCharacterTeamsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharacterTeamsResponseBody = {
  data: [],
  links: {
    first: "<value>",
    last: "<value>",
    prev: "<value>",
    next: null,
  },
  meta: {
    currentPage: 1,
    from: 1,
    lastPage: 25,
    links: [],
    path: "/proc",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.GetCharacterTeamsData](../../models/operations/get-character-teams-data.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `links`                                                                                   | [operations.GetCharacterTeamsLinks](../../models/operations/get-character-teams-links.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `meta`                                                                                    | [operations.GetCharacterTeamsMeta](../../models/operations/get-character-teams-meta.md)   | :heavy_check_mark:                                                                        | N/A                                                                                       |