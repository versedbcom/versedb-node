# GetCharacterSeriesResponseBody

Success

## Example Usage

```typescript
import { GetCharacterSeriesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharacterSeriesResponseBody = {
  data: [
    {
      id: 123,
      name: "Amazing Spider-Man",
      nameI18n: {},
      aliasesI18n: {},
      originalLocale: "en",
      slug: "amazing-spider-man-2018",
      startYear: 2018,
      endYear: 2022,
      imageUrl: "https://...",
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 5,
    perPage: 20,
    total: 100,
  },
};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        | Example                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                                                             | [operations.GetCharacterSeriesData](../../models/operations/get-character-series-data.md)[]                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                | [<br/>{<br/>"id": 123,<br/>"name": "Amazing Spider-Man",<br/>"name_i18n": [],<br/>"aliases_i18n": [],<br/>"original_locale": "en",<br/>"slug": "amazing-spider-man-2018",<br/>"start_year": 2018,<br/>"end_year": 2022,<br/>"image_url": "https://..."<br/>}<br/>] |
| `meta`                                                                                                                                                                                                             | [operations.GetCharacterSeriesMeta](../../models/operations/get-character-series-meta.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |                                                                                                                                                                                                                    |