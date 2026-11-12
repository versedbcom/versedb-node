# MarkAsReadUnprocessableEntity

Invalid Variant, a variant that does not exist, a `read_at` that is not a day up to today, or an issue not released yet.


## Supported Types

### `errors.MarkAsReadResponseBodyError1`

```typescript
const value: errors.MarkAsReadResponseBodyError1 = {
  message:
    "The specified variant does not exist or does not belong to this issue.",
  errors: {
    "variant_id": [
      "The specified variant does not exist or does not belong to this issue.",
    ],
  },
};
```

### `errors.MarkAsReadResponseBodyError2`

```typescript
const value: errors.MarkAsReadResponseBodyError2 = {
  message: "This issue has not been released yet.",
  error: "issue_not_released",
};
```

### `errors.MarkAsReadResponseBodyError3`

```typescript
const value: errors.MarkAsReadResponseBodyError3 = {
  error: "Variant does not belong to this issue",
};
```

