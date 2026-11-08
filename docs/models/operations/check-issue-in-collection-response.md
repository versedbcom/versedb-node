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
      condition: "NM",
      purchasedAt: "2024-01-15T00:00:00.000000Z",
      notes: "First print",
      format: "single",
      storageLocation: "Long box 3",
      pricePaid: "3.99",
      isVariant: false,
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
      forSale: null,
      forTrade: false,
      soldAt: "2024-01-15T00:00:00.000000Z",
      priceSold: "150.00",
      isPublic: true,
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
        images: null,
        isReprint: false,
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
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                           | Record<string, *string*[]>                                                                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `result`                                                                                                            | [operations.CheckIssueInCollectionResponseBody](../../models/operations/check-issue-in-collection-response-body.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |