# LookupByDistributorCodeConflictError

Multiple Matches

## Example Usage

```typescript
import { LookupByDistributorCodeConflictError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | Multiple issues share Lunar code: 1125DC0151. Pick one below.                                            |
| `count`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 3                                                                                                        |
| `totalCount`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 3                                                                                                        |
| `matches`                                                                                                | [operations.LookupByDistributorCodeMatch](../../models/operations/lookup-by-distributor-code-match.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |