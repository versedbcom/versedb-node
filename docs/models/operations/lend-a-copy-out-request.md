# LendACopyOutRequest

## Example Usage

```typescript
import { LendACopyOutRequest } from "@versedbcom/sdk/models/operations";

let value: LendACopyOutRequest = {
  collectionItemId: 1001,
  body: {
    loanedTo: "Dan from the shop",
    loanedAt: "2026-09-01",
    dueAt: "2026-10-01",
    notes: "Lent at the Saturday meetup",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `collectionItemId`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | The collection item ID.                                                                       | 1001                                                                                          |
| `body`                                                                                        | [operations.LendACopyOutRequestBody](../../models/operations/lend-a-copy-out-request-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |