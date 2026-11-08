# AddToWishlistUnprocessableEntity

Wishlist Full, or a variant that is not one of the issue's.


## Supported Types

### `errors.AddToWishlistResponseBodyError1`

```typescript
const value: errors.AddToWishlistResponseBodyError1 = {
  message:
    "The specified variant does not exist or does not belong to this issue.",
  errors: {
    "variant_id": [
      "The specified variant does not exist or does not belong to this issue.",
    ],
  },
};
```

### `errors.AddToWishlistResponseBodyError2`

```typescript
const value: errors.AddToWishlistResponseBodyError2 = {
  message: "Wishlist is full (max 500 items).",
};
```

