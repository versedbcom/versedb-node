# ListReadStatusData

## Example Usage

```typescript
import { ListReadStatusData } from "@versedbcom/sdk/models/operations";

let value: ListReadStatusData = {
  id: 1234,
  userId: 42,
  readableType: "Issue",
  readableId: 5432,
  variantId: null,
  readAt: "2024-01-15T10:30:00.000000Z",
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
  readable: {
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
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        | 1234                                                       |
| `userId`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        | 42                                                         |
| `readableType`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | Issue                                                      |
| `readableId`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        | 5432                                                       |
| `variantId`                                                | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        | null                                                       |
| `readAt`                                                   | *string*                                                   | :heavy_check_mark:                                         | When the issue was read; null when the read has no date.   | 2024-01-15T10:30:00.000000Z                                |
| `createdAt`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | 2024-01-15T10:30:00.000000Z                                |
| `updatedAt`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | 2024-01-15T10:30:00.000000Z                                |
| `readable`                                                 | [operations.Readable](../../models/operations/readable.md) | :heavy_check_mark:                                         | Null once the issue is gone.                               |                                                            |