# MarkAsUnreadRequest

## Example Usage

```typescript
import { MarkAsUnreadRequest } from "@versedbcom/sdk/models/operations";

let value: MarkAsUnreadRequest = {
  issueId: 5432,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `issueId`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | The issue ID.                                                                                | 5432                                                                                         |
| `body`                                                                                       | [operations.MarkAsUnreadRequestBody](../../models/operations/mark-as-unread-request-body.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |