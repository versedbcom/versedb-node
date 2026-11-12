# EditReadingDateUnprocessableEntity

Invalid Variant, a date after today, `undated` sent with `read_at`, or an issue not released yet.


## Supported Types

### `errors.EditReadingDateResponseBodyError1`

```typescript
const value: errors.EditReadingDateResponseBodyError1 = {
  message:
    "The specified variant does not exist or does not belong to this issue.",
  errors: {
    "variant_id": [
      "The specified variant does not exist or does not belong to this issue.",
    ],
  },
};
```

### `errors.EditReadingDateResponseBodyError2`

```typescript
const value: errors.EditReadingDateResponseBodyError2 = {
  message: "This issue has not been released yet.",
  error: "issue_not_released",
};
```

### `errors.EditReadingDateResponseBodyError3`

```typescript
const value: errors.EditReadingDateResponseBodyError3 = {
  error: "Variant does not belong to this issue",
};
```

