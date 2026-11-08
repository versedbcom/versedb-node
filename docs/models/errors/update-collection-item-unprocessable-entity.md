# UpdateCollectionItemUnprocessableEntity

A field the rules refuse, a variant of another issue, or `is_read` on an issue not released yet (the copy is still updated).


## Supported Types

### `errors.UpdateCollectionItemResponseBodyUnprocessableEntityError1`

```typescript
const value: errors.UpdateCollectionItemResponseBodyUnprocessableEntityError1 =
  {
    message:
      "The specified variant does not exist or does not belong to this issue.",
    errors: {
      "variant_id": [
        "The specified variant does not exist or does not belong to this issue.",
      ],
    },
  };
```

### `errors.UpdateCollectionItemResponseBodyUnprocessableEntityError2`

```typescript
const value: errors.UpdateCollectionItemResponseBodyUnprocessableEntityError2 =
  {
    message: "This issue has not been released yet.",
    error: "issue_not_released",
  };
```

### `errors.UpdateCollectionItemResponseBodyUnprocessableEntityError3`

```typescript
const value: errors.UpdateCollectionItemResponseBodyUnprocessableEntityError3 =
  {
    error: "Variant does not belong to this issue.",
  };
```

