# GetIssueCharactersResponseBody

Success

## Example Usage

```typescript
import { GetIssueCharactersResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssueCharactersResponseBody = {
  data: [
    {
      id: 456,
      name: "Spider-Man (Peter Parker)",
      alias: "Peter Parker",
      imageUrl: "https://...",
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 50,
    total: 15,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                      | [operations.GetIssueCharactersData](../../models/operations/get-issue-characters-data.md)[]                 | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | [<br/>{<br/>"id": 456,<br/>"name": "Spider-Man (Peter Parker)",<br/>"alias": "Peter Parker",<br/>"image_url": "https://..."<br/>}<br/>] |
| `meta`                                                                                                      | [operations.GetIssueCharactersMeta](../../models/operations/get-issue-characters-meta.md)                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |