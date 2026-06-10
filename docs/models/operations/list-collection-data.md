# ListCollectionData

## Example Usage

```typescript
import { ListCollectionData } from "@versedbcom/sdk/models/operations";

let value: ListCollectionData = {
  id: 1001,
  userId: 42,
  collectableType: "Issue",
  collectableId: 5432,
  variantId: null,
  condition: "NM",
  purchasedAt: "2024-01-15",
  notes: "First print",
  format: "single",
  storageLocation: "Long box 3",
  pricePaid: 3.99,
  isVariant: false,
  variantDescription: null,
  variantType: null,
  graded: true,
  gradeScore: "9.8",
  gradingCompany: "CGC",
  gradingNumber: "1234567001",
  labelType: "universal",
  pageQuality: "white",
  graderNotes: null,
  purchaseSource: "lcs",
  comicShopId: 17,
  comicShop: {
    id: 17,
    name: "Comic Corner",
    slug: "comic-corner",
    city: "Portland",
    stateProvince: "OR",
  },
  acquisitionMethod: "purchased",
  isSigned: false,
  signedBy: null,
  signatureWitness: null,
  signatureAuthenticated: false,
  isCgcSs: false,
  printNumber: 1,
  estimatedValue: 25,
  valueLastUpdated: "2024-06-01T00:00:00Z",
  forSale: false,
  forTrade: false,
  isPublic: true,
  coverScanUrl: null,
  coverScanUrlLg: null,
  coverScanUploadedAt: null,
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-15T10:30:00Z",
  collectable: {
    id: 5432,
    slug: "example-series-1",
    seriesId: 123,
    issueNumber: "1",
    name: "First Issue",
    coverDate: "2023-11-01",
    releaseDate: "2023-11-08",
    focDate: "2023-10-16",
    coverUrl: "https://versedb.com/storage/issues/5432/cover_lg.jpg",
    images: {
      thumb: "https://versedb.com/storage/issues/5432/thumb.jpg",
      coverSm: "https://versedb.com/storage/issues/5432/cover_sm.jpg",
      coverMd: "https://versedb.com/storage/issues/5432/cover_md.jpg",
      coverLg: "https://versedb.com/storage/issues/5432/cover_lg.jpg",
    },
    isReprint: false,
    ageRating: null,
    isNsfw: false,
    averageRating: 4.5,
    series: {
      id: 123,
      name: "Example Series",
      slug: "example-series",
      startYear: 2023,
      endYear: null,
      volumeNumber: 1,
      publicationType: "ongoing",
      format: "single",
      cachedIssuesCount: 12,
      coverUrl: "https://versedb.com/storage/series/123/cover_lg.jpg",
      images: {
        coverSm: "https://versedb.com/storage/series/123/cover_sm.jpg",
        coverMd: "https://versedb.com/storage/series/123/cover_md.jpg",
        coverLg: "https://versedb.com/storage/series/123/cover_lg.jpg",
      },
      publisherName: "Example Publisher",
    },
    keyIssueReasons: [
      {
        id: 7,
        name: "First appearance",
        category: "appearance",
        slug: "first-appearance",
        notes: null,
      },
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 1001                                                             |
| `userId`                                                         | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 42                                                               |
| `collectableType`                                                | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | Issue                                                            |
| `collectableId`                                                  | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 5432                                                             |
| `variantId`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `condition`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | NM                                                               |
| `purchasedAt`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 2024-01-15                                                       |
| `notes`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | First print                                                      |
| `format`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | single                                                           |
| `storageLocation`                                                | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | Long box 3                                                       |
| `pricePaid`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 3.99                                                             |
| `isVariant`                                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | false                                                            |
| `variantDescription`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `variantType`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `graded`                                                         | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | true                                                             |
| `gradeScore`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 9.8                                                              |
| `gradingCompany`                                                 | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | CGC                                                              |
| `gradingNumber`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 1234567001                                                       |
| `labelType`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | universal                                                        |
| `pageQuality`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | white                                                            |
| `graderNotes`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `purchaseSource`                                                 | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | lcs                                                              |
| `comicShopId`                                                    | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 17                                                               |
| `comicShop`                                                      | [operations.ComicShop](../../models/operations/comic-shop.md)    | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `acquisitionMethod`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | purchased                                                        |
| `isSigned`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | false                                                            |
| `signedBy`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `signatureWitness`                                               | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `signatureAuthenticated`                                         | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | false                                                            |
| `isCgcSs`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | false                                                            |
| `printNumber`                                                    | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 1                                                                |
| `estimatedValue`                                                 | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 25                                                               |
| `valueLastUpdated`                                               | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 2024-06-01T00:00:00Z                                             |
| `forSale`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | false                                                            |
| `forTrade`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | false                                                            |
| `isPublic`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              | true                                                             |
| `coverScanUrl`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `coverScanUrlLg`                                                 | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `coverScanUploadedAt`                                            | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | null                                                             |
| `createdAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 2024-01-15T10:30:00Z                                             |
| `updatedAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 2024-01-15T10:30:00Z                                             |
| `collectable`                                                    | [operations.Collectable](../../models/operations/collectable.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |