# UpdateCollectionItemData

## Example Usage

```typescript
import { UpdateCollectionItemData } from "@versedbcom/sdk/models/operations";

let value: UpdateCollectionItemData = {
  id: 1001,
  userId: 42,
  collectableType: "Issue",
  collectableId: 5432,
  variantId: 789,
  condition: "NM",
  purchasedAt: "2024-01-15T00:00:00.000000Z",
  notes: "First print",
  format: "single",
  storageLocation: "Long box 3",
  pricePaid: "3.99",
  isVariant: false,
  variantDescription: "Cover B",
  variantType: "cover",
  graded: true,
  gradeScore: "9.8",
  gradingCompany: "CGC",
  gradingNumber: "1234567001",
  labelType: "universal",
  pageQuality: "white",
  graderNotes: "Light spine stress",
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
  purchaseStore: "Comic Corner",
  customLabel: "Keys",
  baggedAt: "2024-01-15T00:00:00.000000Z",
  personalRating: 4.5,
  tags: [
    "keys",
  ],
  loan: null,
  isSigned: false,
  signedBy: "Stan Lee",
  signatureWitness: "CGC",
  signatureAuthenticated: false,
  isCgcSs: false,
  printNumber: "1",
  estimatedValue: "125.00",
  valueLastUpdated: "2024-01-15T00:00:00.000000Z",
  status: "owned",
  forSale: true,
  forTrade: true,
  soldAt: "2024-01-15T00:00:00.000000Z",
  priceSold: "150.00",
  isPublic: false,
  coverScanUrl: "https://...-cover_md.webp",
  coverScanUrlLg: "https://...-cover_lg.webp",
  coverScanUploadedAt: "2024-01-15T10:30:00.000000Z",
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
  collectable: {
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
    isNsfw: false,
    averageRating: 4.5,
    nameI18n: {
      "en": "Library One",
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

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 1001                                                                                                        |
| `userId`                                                                                                    | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 42                                                                                                          |
| `collectableType`                                                                                           | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | Issue                                                                                                       |
| `collectableId`                                                                                             | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 5432                                                                                                        |
| `variantId`                                                                                                 | *operations.UpdateCollectionItemVariantId*                                                                  | :heavy_check_mark:                                                                                          | As sent: a number, or digits as text.                                                                       | 789                                                                                                         |
| `condition`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | NM                                                                                                          |
| `purchasedAt`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | 2024-01-15T00:00:00.000000Z                                                                                 |
| `notes`                                                                                                     | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | First print                                                                                                 |
| `format`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | single                                                                                                      |
| `storageLocation`                                                                                           | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | Long box 3                                                                                                  |
| `pricePaid`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | 3.99                                                                                                        |
| `isVariant`                                                                                                 | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `variantDescription`                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | Cover B                                                                                                     |
| `variantType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | cover                                                                                                       |
| `graded`                                                                                                    | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `gradeScore`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 9.8                                                                                                         |
| `gradingCompany`                                                                                            | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | CGC                                                                                                         |
| `gradingNumber`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 1234567001                                                                                                  |
| `labelType`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | universal                                                                                                   |
| `pageQuality`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | white                                                                                                       |
| `graderNotes`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | Light spine stress                                                                                          |
| `purchaseSource`                                                                                            | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | lcs                                                                                                         |
| `comicShopId`                                                                                               | *operations.UpdateCollectionItemComicShopId*                                                                | :heavy_check_mark:                                                                                          | As sent: a number, or digits as text.                                                                       | 17                                                                                                          |
| `comicShop`                                                                                                 | [operations.UpdateCollectionItemComicShop](../../models/operations/update-collection-item-comic-shop.md)    | :heavy_minus_sign:                                                                                          | The shop the copy came from, while it is listed; left out otherwise and for a `read:showcase` token.        |                                                                                                             |
| `acquisitionMethod`                                                                                         | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | purchased                                                                                                   |
| `purchaseStore`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | Comic Corner                                                                                                |
| `customLabel`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | Keys                                                                                                        |
| `baggedAt`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | 2024-01-15T00:00:00.000000Z                                                                                 |
| `personalRating`                                                                                            | *operations.UpdateCollectionItemPersonalRating*                                                             | :heavy_check_mark:                                                                                          | As sent on a write: a number, or text.                                                                      | 4.5                                                                                                         |
| `tags`                                                                                                      | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | [<br/>"keys"<br/>]                                                                                          |
| `loan`                                                                                                      | [operations.UpdateCollectionItemLoan](../../models/operations/update-collection-item-loan.md)               | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       |                                                                                                             |
| `isSigned`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `signedBy`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | Stan Lee                                                                                                    |
| `signatureWitness`                                                                                          | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | CGC                                                                                                         |
| `signatureAuthenticated`                                                                                    | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `isCgcSs`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `printNumber`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 1                                                                                                           |
| `estimatedValue`                                                                                            | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | 125.00                                                                                                      |
| `valueLastUpdated`                                                                                          | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | 2024-01-15T00:00:00.000000Z                                                                                 |
| `status`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | `owned`, `for_sale` or `sold`.                                                                              | owned                                                                                                       |
| `forSale`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `forTrade`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `soldAt`                                                                                                    | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | 2024-01-15T00:00:00.000000Z                                                                                 |
| `priceSold`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Left out for a `read:showcase` token.                                                                       | 150.00                                                                                                      |
| `isPublic`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `coverScanUrl`                                                                                              | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | https://...-cover_md.webp                                                                                   |
| `coverScanUrlLg`                                                                                            | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | https://...-cover_lg.webp                                                                                   |
| `coverScanUploadedAt`                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 2024-01-15T10:30:00.000000Z                                                                                 |
| `createdAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 2024-01-15T10:30:00.000000Z                                                                                 |
| `updatedAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         | 2024-01-15T10:30:00.000000Z                                                                                 |
| `collectable`                                                                                               | [operations.UpdateCollectionItemCollectable](../../models/operations/update-collection-item-collectable.md) | :heavy_check_mark:                                                                                          | The issue.                                                                                                  |                                                                                                             |