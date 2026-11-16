# CheckIssueInCollectionResponse

## Example Usage

```typescript
import { CheckIssueInCollectionResponse } from "@versedbcom/sdk/models/operations";

let value: CheckIssueInCollectionResponse = {
  headers: {},
  result: {
    inCollection: true,
    isUnreleased: true,
    copiesCount: 1,
    copies: [],
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
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                           | Record<string, *string*[]>                                                                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `result`                                                                                                            | [operations.CheckIssueInCollectionResponseBody](../../models/operations/check-issue-in-collection-response-body.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |