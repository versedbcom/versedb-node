# ListFollowsRequest

## Example Usage

```typescript
import { ListFollowsRequest } from "@versedbcom/sdk/models/operations";

let value: ListFollowsRequest = {
  perPage: 20,
  type: "Character",
  q: "spider",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `perPage`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Items per page (max 100).                                                                     | 20                                                                                            |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Only follows of this followable type (the morph alias, e.g. Title, Character, Creator, User). | Character                                                                                     |
| `q`                                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Only follows whose followed entity matches this search (name; username for users).            | spider                                                                                        |