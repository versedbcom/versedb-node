# RemoveIssueFromCollectionUnprocessableEntityError

A variant that does not exist, or a collection item ID that is not an integer.

## Example Usage

```typescript
import { RemoveIssueFromCollectionUnprocessableEntityError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `message`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | The specified variant does not exist or does not belong to this issue.                         |
| `errors`                                                                                       | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            | {<br/>"variant_id": [<br/>"The specified variant does not exist or does not belong to this issue."<br/>]<br/>} |