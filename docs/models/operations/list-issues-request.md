# ListIssuesRequest

## Example Usage

```typescript
import { ListIssuesRequest } from "@versedbcom/sdk/models/operations";

let value: ListIssuesRequest = {
  q: "origin",
  seriesId: 123,
  publisherId: 1,
  releaseDateFrom: "2024-01-01",
  releaseDateTo: "2024-12-31",
  publisherIds: "1,2",
  seriesIds: "123,456",
  titleIds: "10",
  characterIds: "1,2",
  genreIds: "3",
  languages: "en,ja",
  medium: "comic",
  keyIssuesOnly: false,
  hideUnreleased: false,
  include: "series",
  sort: "release_date",
  direction: "desc",
  limit: 20,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `q`                                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | Search by issue name.                                                                      | origin                                                                                     |
| `seriesId`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | Filter by series ID.                                                                       | 123                                                                                        |
| `publisherId`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | Filter by publisher ID (via series relationship).                                          | 1                                                                                          |
| `releaseDateFrom`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | Filter by release date (from).                                                             | 2024-01-01                                                                                 |
| `releaseDateTo`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | Filter by release date (to).                                                               | 2024-12-31                                                                                 |
| `publisherIds`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Comma-separated publisher IDs; matches issues from any of them.                            | 1,2                                                                                        |
| `seriesIds`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | Comma-separated series IDs; matches issues in any of them.                                 | 123,456                                                                                    |
| `titleIds`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | Comma-separated title (franchise) IDs; matches issues whose series belongs to any of them. | 10                                                                                         |
| `characterIds`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Comma-separated character IDs, up to 10; an issue must feature every one.                  | 1,2                                                                                        |
| `genreIds`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | Comma-separated genre IDs; matches issues whose series carries any of them.                | 3                                                                                          |
| `languages`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | Comma-separated series language codes (en, ja, fr, ...).                                   | en,ja                                                                                      |
| `medium`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Series medium (comic, manga, manhwa, manhua, bande_dessinee, magazine).                    | comic                                                                                      |
| `keyIssuesOnly`                                                                            | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Only return issues with at least one key issue reason.                                     | false                                                                                      |
| `hideUnreleased`                                                                           | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Leave out issues whose release date is in the future.                                      | false                                                                                      |
| `include`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Comma-separated relationships to include (series).                                         | series                                                                                     |
| `sort`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | Sort field (issue_number, release_date, name).                                             | release_date                                                                               |
| `direction`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | Sort direction (asc, desc).                                                                | desc                                                                                       |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | Results per page (max 100).                                                                | 20                                                                                         |