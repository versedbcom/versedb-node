# GetCharacterTeamsResponseBody

Success

## Example Usage

```typescript
import { GetCharacterTeamsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetCharacterTeamsResponseBody = {
  data: [
    {
      id: 10,
      name: "Avengers",
      slug: "avengers",
      imageUrl: "https://...",
      membership: {
        role: "Member",
        joinedDate: "2012-05-01",
        leftDate: null,
      },
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 20,
    total: 5,
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                   | [operations.GetCharacterTeamsData](../../models/operations/get-character-teams-data.md)[]                                                                                | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      | [<br/>{<br/>"id": 10,<br/>"name": "Avengers",<br/>"slug": "avengers",<br/>"image_url": "https://...",<br/>"membership": {<br/>"role": "Member",<br/>"joined_date": "2012-05-01",<br/>"left_date": null<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                   | [operations.GetCharacterTeamsMeta](../../models/operations/get-character-teams-meta.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |