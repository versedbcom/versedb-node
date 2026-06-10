# GetCharacterIssuesResponseBody

Success

## Example Usage

```typescript
import { GetCharacterIssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharacterIssuesResponseBody = {
  data: [
    {
      id: 5432,
      number: "1",
      name: "The Amazing Spider-Man #1",
      releaseDate: "2018-07-11",
      coverUrl: "https://...",
      series: {
        id: 123,
        name: "Amazing Spider-Man",
      },
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 100,
    perPage: 20,
    total: 2000,
  },
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             | Example                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                  | [operations.GetCharacterIssuesData](../../models/operations/get-character-issues-data.md)[]                                                                                             | :heavy_minus_sign:                                                                                                                                                                      | N/A                                                                                                                                                                                     | [<br/>{<br/>"id": 5432,<br/>"number": "1",<br/>"name": "The Amazing Spider-Man #1",<br/>"release_date": "2018-07-11",<br/>"cover_url": "https://...",<br/>"series": {<br/>"id": 123,<br/>"name": "Amazing Spider-Man"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                                  | [operations.GetCharacterIssuesMeta](../../models/operations/get-character-issues-meta.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                      | N/A                                                                                                                                                                                     |                                                                                                                                                                                         |