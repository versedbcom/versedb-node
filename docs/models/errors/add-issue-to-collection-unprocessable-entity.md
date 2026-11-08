# AddIssueToCollectionUnprocessableEntity

A field the rules refuse, a variant of another issue, or an issue not released yet.


## Supported Types

### `errors.AddIssueToCollectionResponseBodyError1`

```typescript
const value: errors.AddIssueToCollectionResponseBodyError1 = {
  message:
    "The specified variant does not exist or does not belong to this issue.",
  errors: {
    "variant_id": [
      "The specified variant does not exist or does not belong to this issue.",
    ],
  },
};
```

### `errors.AddIssueToCollectionResponseBodyError2`

```typescript
const value: errors.AddIssueToCollectionResponseBodyError2 = {
  message: "This issue has not been released yet.",
  error: "issue_not_released",
};
```

### `errors.AddIssueToCollectionResponseBodyError3`

```typescript
const value: errors.AddIssueToCollectionResponseBodyError3 = {
  error: "Variant does not belong to this issue.",
};
```

