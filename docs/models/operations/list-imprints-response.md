# ListImprintsResponse

## Example Usage

```typescript
import { ListImprintsResponse } from "@versedbcom/sdk/models/operations";

let value: ListImprintsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    data: [
      {
        id: 7,
        name: "Vertigo",
        slug: "vertigo",
        publisher: {
          id: 2,
          name: "DC Comics",
          slug: "dc-comics",
        },
        nameI18n: {
          "ja": {
            value: "講談社",
            source: "madb",
            reading: "こうだんしゃ",
          },
        },
        aliasesI18n: {
          "en": [
            "Kodansha Comics",
          ],
        },
        originalLocale: "en",
      },
    ],
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
      path: "/boot",
      perPage: 20,
      to: 20,
      total: 500,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [operations.ListImprintsResponseBody](../../models/operations/list-imprints-response-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |