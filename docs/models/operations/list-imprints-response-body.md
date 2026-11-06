# ListImprintsResponseBody

Success

## Example Usage

```typescript
import { ListImprintsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListImprintsResponseBody = {
  data: [
    {
      id: 7,
      name: "Vertigo",
      nameI18n: {},
      aliasesI18n: {},
      originalLocale: "en",
      slug: "vertigo",
      publisher: {
        id: 2,
        name: "DC Comics",
        slug: "dc-comics",
      },
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 3,
    perPage: 20,
    total: 45,
  },
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             | Example                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                  | [operations.ListImprintsData](../../models/operations/list-imprints-data.md)[]                                                                                                          | :heavy_minus_sign:                                                                                                                                                                      | N/A                                                                                                                                                                                     | [<br/>{<br/>"id": 7,<br/>"name": "Vertigo",<br/>"name_i18n": [],<br/>"aliases_i18n": [],<br/>"original_locale": "en",<br/>"slug": "vertigo",<br/>"publisher": {<br/>"id": 2,<br/>"name": "DC Comics",<br/>"slug": "dc-comics"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                                  | [operations.ListImprintsMeta](../../models/operations/list-imprints-meta.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                      | N/A                                                                                                                                                                                     |                                                                                                                                                                                         |