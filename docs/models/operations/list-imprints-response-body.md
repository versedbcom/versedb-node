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
      slug: "vertigo",
      description:
        "DC's mature readers imprint, home to Sandman, Preacher, and Y: The Last Man.",
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

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              | Example                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                                                                   | [operations.ListImprintsData](../../models/operations/list-imprints-data.md)[]                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      | [<br/>{<br/>"id": 7,<br/>"name": "Vertigo",<br/>"slug": "vertigo",<br/>"description": "DC's mature readers imprint, home to Sandman, Preacher, and Y: The Last Man.",<br/>"publisher": {<br/>"id": 2,<br/>"name": "DC Comics",<br/>"slug": "dc-comics"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                                                                   | [operations.ListImprintsMeta](../../models/operations/list-imprints-meta.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |                                                                                                                                                                                                                          |