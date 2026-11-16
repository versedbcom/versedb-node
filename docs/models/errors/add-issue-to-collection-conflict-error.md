# AddIssueToCollectionConflictError

A request with the same `Idempotency-Key` is still adding the copy (`add_in_progress`; repeat it after a moment), or the copy that key added has since been removed (`copy_removed`).

## Example Usage

```typescript
import { AddIssueToCollectionConflictError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `message`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | This copy is already being added. Try again in a moment. |
| `error`                                                  | [operations.ErrorT](../../models/operations/error-t.md)  | :heavy_check_mark:                                       | N/A                                                      | add_in_progress                                          |