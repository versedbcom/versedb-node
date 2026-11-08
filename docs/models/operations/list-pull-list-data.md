# ListPullListData

## Example Usage

```typescript
import { ListPullListData } from "@versedbcom/sdk/models/operations";

let value: ListPullListData = {
  id: 1234,
  userId: 42,
  pullableType: "Series",
  pullableId: 456,
  seriesId: 456,
  variantId: null,
  status: "active",
  pullSources: [
    {
      id: 12,
      name: "Main Street Comics",
      kind: "shop",
      kindLabel: "Comic shop",
      hasPickup: true,
      comicShopId: 345,
      location: "Springfield, IL",
      pickupNote: "Ships Friday",
      isDefault: true,
      isLinked: false,
      shopLinkId: null,
      sort: 1,
      createdAt: "2024-01-15T10:30:00.000000Z",
      updatedAt: "2024-01-15T10:30:00.000000Z",
    },
  ],
  pullSource: {
    id: 12,
    name: "Main Street Comics",
    kind: "shop",
    kindLabel: "Comic shop",
    hasPickup: false,
    comicShopId: 345,
    location: "Springfield, IL",
    pickupNote: "Ships Friday",
    isDefault: true,
    isLinked: false,
    shopLinkId: null,
    sort: 1,
    createdAt: "2024-01-15T10:30:00.000000Z",
    updatedAt: "2024-01-15T10:30:00.000000Z",
  },
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
  seriesName: "The Amazing Spider-Man",
  seriesCoverUrl: "https://...-cover_md.webp",
  seriesImages: {
    coverSm: "https://...-cover_sm.webp",
    coverMd: "https://...-cover_md.webp",
    coverLg: "https://...-cover_lg.webp",
  },
  publisherName: "Marvel",
  isNsfw: false,
  nextIssue: {
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
    isReprint: true,
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
  },
  series: null,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 1234                                                                              |
| `userId`                                                                          | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 42                                                                                |
| `pullableType`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | Series                                                                            |
| `pullableId`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 456                                                                               |
| `seriesId`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 456                                                                               |
| `variantId`                                                                       | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | null                                                                              |
| `status`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | `active`, `paused` or `canceled`.                                                 | active                                                                            |
| `autoPull`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `lastPulledAt`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `preferredCoverType`                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `pullPriority`                                                                    | *number*                                                                          | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `notifyOnRelease`                                                                 | *boolean*                                                                         | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `notificationSettings`                                                            | *operations.NotificationSettings*                                                 | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `personalNotes`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `pullSourceIds`                                                                   | *number*[]                                                                        | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `pullSources`                                                                     | [operations.PullSource](../../models/operations/pull-source.md)[]                 | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `pullSourceId`                                                                    | *number*                                                                          | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `pullSource`                                                                      | [operations.PullSource](../../models/operations/pull-source.md)                   | :heavy_minus_sign:                                                                | Left out for a `read:showcase` token.                                             |                                                                                   |
| `createdAt`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 2024-01-15T10:30:00.000000Z                                                       |
| `updatedAt`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 2024-01-15T10:30:00.000000Z                                                       |
| `seriesName`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | Null once the series is gone.                                                     | The Amazing Spider-Man                                                            |
| `seriesCoverUrl`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | https://...-cover_md.webp                                                         |
| `seriesImages`                                                                    | [operations.SeriesImages](../../models/operations/series-images.md)               | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |
| `publisherName`                                                                   | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | Marvel                                                                            |
| `isNsfw`                                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |
| `nextIssue`                                                                       | [operations.NextIssue](../../models/operations/next-issue.md)                     | :heavy_check_mark:                                                                | The series' next issue released today or later that the member hasn't skipped.    |                                                                                   |
| `series`                                                                          | [operations.ListPullListSeries](../../models/operations/list-pull-list-series.md) | :heavy_check_mark:                                                                | Null once the series is gone.                                                     |                                                                                   |