# AddIssueToCollectionResponseBody

Added

## Example Usage

```typescript
import { AddIssueToCollectionResponseBody } from "@versedbcom/sdk/models/operations";

let value: AddIssueToCollectionResponseBody = {
  data: {
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
    isVariant: true,
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
    loan: {
      id: 3,
      loanedTo: "Sam",
      loanedAt: "2024-01-15",
      dueAt: "2024-02-15",
      isOverdue: true,
      daysUntilDue: 12,
    },
    isSigned: true,
    signedBy: "Stan Lee",
    signatureWitness: "CGC",
    signatureAuthenticated: true,
    isCgcSs: false,
    printNumber: "1",
    estimatedValue: "125.00",
    valueLastUpdated: "2024-01-15T00:00:00.000000Z",
    status: "owned",
    forSale: false,
    forTrade: true,
    soldAt: "2024-01-15T00:00:00.000000Z",
    priceSold: "150.00",
    isPublic: false,
    coverScanUrl: "https://...-cover_md.webp",
    coverScanUrlLg: "https://...-cover_lg.webp",
    coverScanUploadedAt: "2024-01-15T10:30:00.000000Z",
    createdAt: "2024-01-15T10:30:00.000000Z",
    updatedAt: "2024-01-15T10:30:00.000000Z",
    collectable: null,
  },
  wasOnWishlist: true,
  followUp: {
    prompt: true,
    canMarkRead: true,
    canReview: true,
    hasReview: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.AddIssueToCollectionData](../../models/operations/add-issue-to-collection-data.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `wasOnWishlist`                                                                                | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            | true                                                                                           |
| `followUp`                                                                                     | [operations.FollowUp](../../models/operations/follow-up.md)                                    | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |