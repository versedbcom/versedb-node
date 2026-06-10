# GetIssueDetailsData

## Example Usage

```typescript
import { GetIssueDetailsData } from "@versedbcom/sdk/models/operations";

let value: GetIssueDetailsData = {
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 5432                                                                                            |
| `slug`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | amazing-spider-man-1                                                                            |
| `seriesId`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 123                                                                                             |
| `issueNumber`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 1                                                                                               |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | The Amazing Spider-Man #1                                                                       |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | Nick Spencer and Ryan Ottley begin a new era...                                                 |
| `releaseDate`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 2018-07-11                                                                                      |
| `coverDate`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 2018-09-01                                                                                      |
| `coverUrl`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | https://...                                                                                     |
| `isReprint`                                                                                     | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             | false                                                                                           |
| `ageRating`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | teen                                                                                            |
| `isNsfw`                                                                                        | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             | false                                                                                           |
| `pageCount`                                                                                     | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 40                                                                                              |
| `price`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 4.99                                                                                            |
| `upc`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 75960608936700111                                                                               |
| `series`                                                                                        | [operations.GetIssueDetailsSeries](../../models/operations/get-issue-details-series.md)         | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `title`                                                                                         | [operations.GetIssueDetailsTitle](../../models/operations/get-issue-details-title.md)           | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `publisher`                                                                                     | [operations.GetIssueDetailsPublisher](../../models/operations/get-issue-details-publisher.md)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `creators`                                                                                      | [operations.GetIssueDetailsCreator](../../models/operations/get-issue-details-creator.md)[]     | :heavy_minus_sign:                                                                              | N/A                                                                                             | [<br/>{<br/>"id": 789,<br/>"name": "Nick Spencer",<br/>"slug": "nick-spencer",<br/>"role": "Writer"<br/>}<br/>] |
| `characters`                                                                                    | [operations.GetIssueDetailsCharacter](../../models/operations/get-issue-details-character.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             | [<br/>{<br/>"id": 456,<br/>"name": "Spider-Man",<br/>"slug": "spider-man"<br/>}<br/>]           |