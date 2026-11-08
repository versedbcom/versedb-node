# FollowUpdatesData

## Example Usage

```typescript
import { FollowUpdatesData } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesData = {
  id: 5432,
  slug: "amazing-spider-man-1",
  seriesId: 123,
  issueNumber: "1",
  name: "The Chameleon Strikes!",
  coverDate: "2018-09-01",
  releaseDate: "2018-07-11",
  focDate: "2018-06-18",
  isUnreleased: true,
  coverUrl: "https://...-cover_lg.webp",
  images: {
    thumb: "https://...-thumb.webp",
    coverSm: "https://...-cover_sm.webp",
    coverMd: "https://...-cover_md.webp",
    coverLg: "https://...-cover_lg.webp",
  },
  isReprint: false,
  contentRatingLabel: "Teen",
  minAge: 13,
  isNsfw: true,
  averageRating: 4.5,
  nameI18n: {
    "ja": {
      value: "講談社",
      source: "madb",
      reading: "こうだんしゃ",
    },
  },
  series: {
    id: 123,
    name: "The Amazing Spider-Man",
    slug: "the-amazing-spider-man-2018",
    startYear: 2018,
    endYear: 2022,
    volumeNumber: 5,
    publicationType: "regular_series",
    format: "Standard",
    cachedIssuesCount: 93,
    coverUrl: "https://...-cover_lg.webp",
    images: {
      coverSm: "https://...-cover_sm.webp",
      coverMd: "https://...-cover_md.webp",
      coverLg: "https://...-cover_lg.webp",
    },
    publisherName: "Marvel",
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
| `images`                                                                                                | [operations.FollowUpdatesImages](../../models/operations/follow-updates-images.md)                      | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `isReprint`                                                                                             | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `contentRatingLabel`                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | Teen                                                                                                    |
| `minAge`                                                                                                | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 13                                                                                                      |
| `isNsfw`                                                                                                | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `averageRating`                                                                                         | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | 4.5                                                                                                     |
| `nameI18n`                                                                                              | Record<string, [operations.FollowUpdatesNameI18n](../../models/operations/follow-updates-name-i18n.md)> | :heavy_check_mark:                                                                                      | One name per language, keyed by BCP 47 tag.                                                             | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}             |
| `series`                                                                                                | [operations.FollowUpdatesSeries](../../models/operations/follow-updates-series.md)                      | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |