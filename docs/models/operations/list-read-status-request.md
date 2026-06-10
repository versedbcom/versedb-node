# ListReadStatusRequest

## Example Usage

```typescript
import { ListReadStatusRequest } from "@versedbcom/sdk/models/operations";

let value: ListReadStatusRequest = {
  perPage: 20,
  unreviewed: true,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `perPage`                                                               | *number*                                                                | :heavy_minus_sign:                                                      | Items per page (max 100).                                               | 20                                                                      |
| `unreviewed`                                                            | *boolean*                                                               | :heavy_minus_sign:                                                      | When true, only returns reads for issues the user has not yet reviewed. | true                                                                    |