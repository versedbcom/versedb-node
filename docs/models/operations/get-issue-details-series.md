# GetIssueDetailsSeries

## Example Usage

```typescript
import { GetIssueDetailsSeries } from "@versedbcom/sdk/models/operations";

let value: GetIssueDetailsSeries = {
  id: 123,
  name: "The Amazing Spider-Man",
  slug: "the-amazing-spider-man-2018",
  startYear: 2018,
  endYear: 2022,
  volumeNumber: 5,
  status: "Ongoing",
  publicationType: "regular_series",
  cachedIssuesCount: 93,
  medium: "comic",
  format: "Standard",
  contentRatingLabel: "Teen",
  minAge: 13,
  isNsfw: false,
  originalLanguage: "en",
  language: "en",
  genres: [
    {
      id: 3,
      name: "Superhero",
      slug: "<value>",
    },
  ],
  aliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  imprint: {
    id: 7,
    name: "Marvel Knights",
  },
  foreignEditionOf: [
    {
      id: 1,
      name: "<value>",
      slug: "slug",
      language: "<value>",
    },
  ],
  foreignEditions: [],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 123                                                                                                             |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | The Amazing Spider-Man                                                                                          |
| `slug`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | the-amazing-spider-man-2018                                                                                     |
| `startYear`                                                                                                     | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 2018                                                                                                            |
| `endYear`                                                                                                       | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 2022                                                                                                            |
| `volumeNumber`                                                                                                  | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 5                                                                                                               |
| `status`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Ongoing                                                                                                         |
| `publicationType`                                                                                               | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | regular_series                                                                                                  |
| `cachedIssuesCount`                                                                                             | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 93                                                                                                              |
| `medium`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | comic                                                                                                           |
| `format`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Standard                                                                                                        |
| `contentRatingLabel`                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Teen                                                                                                            |
| `minAge`                                                                                                        | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | 13                                                                                                              |
| `isNsfw`                                                                                                        | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `originalLanguage`                                                                                              | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | en                                                                                                              |
| `language`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | en                                                                                                              |
| `genres`                                                                                                        | [operations.GetIssueDetailsGenre](../../models/operations/get-issue-details-genre.md)[]                         | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `aliases`                                                                                                       | *string*[]                                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `imprint`                                                                                                       | [operations.GetIssueDetailsSeriesImprint](../../models/operations/get-issue-details-series-imprint.md)          | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `foreignEditionOf`                                                                                              | [operations.GetIssueDetailsForeignEditionOf](../../models/operations/get-issue-details-foreign-edition-of.md)[] | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `foreignEditions`                                                                                               | [operations.GetIssueDetailsForeignEdition](../../models/operations/get-issue-details-foreign-edition.md)[]      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |