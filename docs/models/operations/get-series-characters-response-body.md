# GetSeriesCharactersResponseBody

Success

## Example Usage

```typescript
import { GetSeriesCharactersResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCharactersResponseBody = {
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
    lastPage: 2,
    perPage: 50,
    total: 75,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                      | [operations.GetSeriesCharactersData](../../models/operations/get-series-characters-data.md)[]               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | [<br/>{<br/>"id": 456,<br/>"name": "Spider-Man (Peter Parker)",<br/>"alias": "Peter Parker",<br/>"image_url": "https://..."<br/>}<br/>] |
| `meta`                                                                                                      | [operations.GetSeriesCharactersMeta](../../models/operations/get-series-characters-meta.md)                 | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |