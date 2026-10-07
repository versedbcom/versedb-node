# ListReadStatusRequest

## Example Usage

```typescript
import { ListReadStatusRequest } from "@versedbcom/sdk/models/operations";

let value: ListReadStatusRequest = {
  perPage: 20,
  unreviewed: true,
  q: "saga 12",
  sort: "read_at_asc",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `perPage`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | Items per page (max 100).                                                                      | 20                                                                                             |
| `unreviewed`                                                                                   | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | When true, only returns reads for issues the user has not yet reviewed.                        | true                                                                                           |
| `q`                                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | Search your reads by series name or issue number.                                              | saga 12                                                                                        |
| `sort`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | One of `read_at_desc`, `read_at_asc`, `title_asc`, `title_desc`. Default: newest marked first. | read_at_asc                                                                                    |