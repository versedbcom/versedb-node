# UpcomingIssue

## Example Usage

```typescript
import { UpcomingIssue } from "@versedbcom/sdk/models/operations";

let value: UpcomingIssue = {
  id: 5432,
  slug: "amazing-spider-man-1",
  seriesId: 123,
  issueNumber: "1",
  name: "The Chameleon Strikes!",
  coverDate: "2018-09-01",
  releaseDate: "2018-07-11",
  focDate: "2018-06-18",
  isUnreleased: false,
  coverUrl: "https://...-cover_lg.webp",
  images: {
    thumb: "https://...-thumb.webp",
    coverSm: "https://...-cover_sm.webp",
    coverMd: "https://...-cover_md.webp",
    coverLg: "https://...-cover_lg.webp",
  },
  isReprint: true,
  contentRatingLabel: "Teen",
  minAge: 13,
  isNsfw: false,
  averageRating: 4.5,
  nameI18n: {
    "ja": {
      value: "講談社",
      source: "madb",
      reading: "こうだんしゃ",
    },
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 5432                                                                                                    |
| `slug`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | amazing-spider-man-1                                                                                    |
| `seriesId`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 123                                                                                                     |
| `issueNumber`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 1                                                                                                       |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | The Chameleon Strikes!                                                                                  |
| `coverDate`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 2018-09-01                                                                                              |
| `releaseDate`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 2018-07-11                                                                                              |
| `focDate`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 2018-06-18                                                                                              |
| `isUnreleased`                                                                                          | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `coverUrl`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | https://...-cover_lg.webp                                                                               |
| `images`                                                                                                | [operations.UpcomingIssueImages](../../models/operations/upcoming-issue-images.md)                      | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `isReprint`                                                                                             | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `contentRatingLabel`                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | Teen                                                                                                    |
| `minAge`                                                                                                | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 13                                                                                                      |
| `isNsfw`                                                                                                | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `averageRating`                                                                                         | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 4.5                                                                                                     |
| `nameI18n`                                                                                              | Record<string, [operations.UpcomingIssueNameI18n](../../models/operations/upcoming-issue-name-i18n.md)> | :heavy_check_mark:                                                                                      | One name per language, keyed by BCP 47 tag.                                                             | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}             |