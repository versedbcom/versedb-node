# LookupByUPCConflictError

Multiple Matches

## Example Usage

```typescript
import { LookupByUPCConflictError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `message`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | Multiple issues share UPC: 075960608936. Pick one below.                        |
| `count`                                                                         | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 3                                                                               |
| `totalCount`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 3                                                                               |
| `matches`                                                                       | [operations.LookupByUPCMatch](../../models/operations/lookup-by-upc-match.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |