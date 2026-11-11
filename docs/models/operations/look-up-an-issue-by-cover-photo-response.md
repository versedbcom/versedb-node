# LookUpAnIssueByCoverPhotoResponse

## Example Usage

```typescript
import { LookUpAnIssueByCoverPhotoResponse } from "@versedbcom/sdk/models/operations";

let value: LookUpAnIssueByCoverPhotoResponse = {
  headers: {},
  result: {
    matchedBy: "image",
    clearMatch: true,
    issueId: 5432,
    variantId: 789,
    candidates: [],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                    | Record<string, *string*[]>                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `result`                                                                                                                     | [operations.LookUpAnIssueByCoverPhotoResponseBody](../../models/operations/look-up-an-issue-by-cover-photo-response-body.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |