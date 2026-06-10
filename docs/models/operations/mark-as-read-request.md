# MarkAsReadRequest

## Example Usage

```typescript
import { MarkAsReadRequest } from "@versedbcom/sdk/models/operations";

let value: MarkAsReadRequest = {
  issueId: 5432,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `issueId`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | The issue ID.                                                                            | 5432                                                                                     |
| `body`                                                                                   | [operations.MarkAsReadRequestBody](../../models/operations/mark-as-read-request-body.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |