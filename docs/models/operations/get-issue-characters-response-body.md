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
      nameI18n: {},
      realNameI18n: {},
      aliasesI18n: {},
      originalLocale: "en",
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

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     | Example                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                          | [operations.GetIssueCharactersData](../../models/operations/get-issue-characters-data.md)[]                                                                                                     | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             | [<br/>{<br/>"id": 456,<br/>"name": "Spider-Man (Peter Parker)",<br/>"name_i18n": [],<br/>"real_name_i18n": [],<br/>"aliases_i18n": [],<br/>"original_locale": "en",<br/>"alias": "Peter Parker",<br/>"image_url": "https://..."<br/>}<br/>] |
| `meta`                                                                                                                                                                                          | [operations.GetIssueCharactersMeta](../../models/operations/get-issue-characters-meta.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |                                                                                                                                                                                                 |