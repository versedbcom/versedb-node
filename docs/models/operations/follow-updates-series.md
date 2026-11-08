# FollowUpdatesSeries

## Example Usage

```typescript
import { FollowUpdatesSeries } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesSeries = {
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 123                                                                                             |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | The Amazing Spider-Man                                                                          |
| `slug`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | the-amazing-spider-man-2018                                                                     |
| `startYear`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 2018                                                                                            |
| `endYear`                                                                                       | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 2022                                                                                            |
| `volumeNumber`                                                                                  | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 5                                                                                               |
| `publicationType`                                                                               | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | regular_series                                                                                  |
| `format`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | Standard                                                                                        |
| `cachedIssuesCount`                                                                             | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | 93                                                                                              |
| `coverUrl`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | https://...-cover_lg.webp                                                                       |
| `images`                                                                                        | [operations.FollowUpdatesSeriesImages](../../models/operations/follow-updates-series-images.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `publisherName`                                                                                 | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | Marvel                                                                                          |