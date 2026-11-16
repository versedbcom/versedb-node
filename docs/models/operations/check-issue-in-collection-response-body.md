# CheckIssueInCollectionResponseBody

Success

## Example Usage

```typescript
import { CheckIssueInCollectionResponseBody } from "@versedbcom/sdk/models/operations";

let value: CheckIssueInCollectionResponseBody = {
  inCollection: false,
  isUnreleased: true,
  copiesCount: 1,
  copies: [
    {
      id: 1001,
      variantId: 789,
      coverKind: "catalog",
      variantLabel: "Cover B",
      condition: "NM",
      graded: true,
      gradeScore: "9.8",
      gradingCompany: "CGC",
      isSigned: true,
      signedBy: "Stan Lee",
      isCgcSs: true,
      format: "single",
      storageLocation: "Long box 3",
      purchasedAt: "2024-01-15T00:00:00+00:00",
      notes: "First print",
      createdAt: "2024-01-15T10:30:00+00:00",
      updatedAt: "2024-01-15T10:30:00+00:00",
    },
  ],
  data: {
    id: 1001,
    userId: 42,
    collectableType: "Issue",
    collectableId: 5432,
    variantId: null,
    variant: {
      id: 789,
      name: "Cover B",
      type: "cover_variant",
      coverUrl: "https://...-cover_md.webp",
      coverUrlLg: "https://...-cover_lg.webp",
      ratio: "1:25",
      printing: 1,
      isNsfw: false,
    },
    coverKind: "catalog",
    condition: "NM",
    purchasedAt: "2024-01-15T00:00:00.000000Z",
    notes: "First print",
    format: "single",
    storageLocation: "Long box 3",
    pricePaid: "3.99",
    isVariant: true,
    variantDescription: "Cover B",
    variantType: "cover",
    graded: false,
    gradeScore: "9.8",
    gradingCompany: "CGC",
    gradingNumber: "1234567001",
    labelType: "universal",
    pageQuality: "white",
    graderNotes: "Light spine stress",
    purchaseSource: "lcs",
    comicShopId: 17,
    acquisitionMethod: "purchased",
    purchaseStore: "Comic Corner",
    customLabel: "Keys",
    baggedAt: "2024-01-15T00:00:00.000000Z",
    personalRating: "4.5",
    tags: [
      "keys",
    ],
    loan: {
      id: 3,
      loanedTo: "Sam",
      loanedAt: "2024-01-15",
      dueAt: "2024-02-15",
      isOverdue: false,
      daysUntilDue: 12,
    },
    isSigned: true,
    signedBy: "Stan Lee",
    signatureWitness: "CGC",
    signatureAuthenticated: false,
    isCgcSs: true,
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `inCollection`                                                                                     | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `isUnreleased`                                                                                     | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | The issue is more than a day from its release, so it cannot be added yet.                          |                                                                                                    |
| `copiesCount`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | 1                                                                                                  |
| `copies`                                                                                           | [operations.Copy](../../models/operations/copy.md)[]                                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `data`                                                                                             | [operations.CheckIssueInCollectionData](../../models/operations/check-issue-in-collection-data.md) | :heavy_check_mark:                                                                                 | The first copy, or null when there is none.                                                        |                                                                                                    |