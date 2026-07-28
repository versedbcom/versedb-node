# CheckIssueInCollectionResponseBody

Success.


## Supported Types

### `operations.CheckIssueInCollectionResponseBody1`

```typescript
const value: operations.CheckIssueInCollectionResponseBody1 = {
  inCollection: true,
  copiesCount: 1,
  copies: [
    {
      id: 1001,
      variantId: 789,
      condition: "NM",
      graded: true,
      gradeScore: "9.8",
      gradingCompany: "CGC",
      isSigned: false,
      signedBy: null,
      isCgcSs: false,
      format: "single",
      storageLocation: "Long box 3",
      purchasedAt: "2024-01-15T00:00:00Z",
      notes: "First print",
      createdAt: "2024-01-15T10:30:00Z",
    },
  ],
  data: {
    id: 1001,
    condition: "NM",
    pricePaid: 4.99,
    issue: {
      id: 5432,
      name: "The Amazing Spider-Man #1",
      issueNumber: "1",
    },
  },
};
```

### `operations.CheckIssueInCollectionResponseBody2`

```typescript
const value: operations.CheckIssueInCollectionResponseBody2 = {
  inCollection: false,
  copiesCount: 0,
  copies: [],
  data: null,
};
```

