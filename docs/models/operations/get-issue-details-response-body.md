# GetIssueDetailsResponseBody

Success

## Example Usage

```typescript
import { GetIssueDetailsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssueDetailsResponseBody = {
  data: {
    id: 5432,
    slug: "amazing-spider-man-1",
    seriesId: 123,
    issueNumber: "1",
    name: "The Amazing Spider-Man #1",
    description: "Nick Spencer and Ryan Ottley begin a new era...",
    releaseDate: "2018-07-11",
    coverDate: "2018-09-01",
    coverUrl: "https://...",
    isReprint: false,
    ageRating: "teen",
    isNsfw: false,
    pageCount: 40,
    price: "4.99",
    upc: "75960608936700111",
    series: {
      id: 123,
      name: "Amazing Spider-Man",
      slug: "amazing-spider-man-2018",
    },
    title: {
      id: 45,
      name: "Amazing Spider-Man",
    },
    publisher: {
      id: 1,
      name: "Marvel",
      slug: "marvel",
    },
    creators: [
      {
        id: 789,
        name: "Nick Spencer",
        slug: "nick-spencer",
        role: "Writer",
      },
    ],
    characters: [
      {
        id: 456,
        name: "Spider-Man",
        slug: "spider-man",
      },
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [operations.GetIssueDetailsData](../../models/operations/get-issue-details-data.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |