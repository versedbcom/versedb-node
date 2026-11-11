# LookUpAnIssueByCoverPhotoResponseBody

Success.

## Example Usage

```typescript
import { LookUpAnIssueByCoverPhotoResponseBody } from "@versedbcom/sdk/models/operations";

let value: LookUpAnIssueByCoverPhotoResponseBody = {
  matchedBy: "image",
  clearMatch: true,
  issueId: 5432,
  variantId: 789,
  candidates: [],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `matchedBy`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Always `image`: the answer comes from the image match.                                    | image                                                                                     |
| `clearMatch`                                                                              | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether the image match is sure of the issue.                                             | true                                                                                      |
| `issueId`                                                                                 | *number*                                                                                  | :heavy_check_mark:                                                                        | The matched issue when `clear_match` is true, otherwise null.                             | 5432                                                                                      |
| `variantId`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | The matched variant cover when the match settled one, otherwise null.                     | 789                                                                                       |
| `candidates`                                                                              | [operations.Candidate](../../models/operations/candidate.md)[]                            | :heavy_check_mark:                                                                        | Best first: the matched issue alone on a clear match, otherwise up to five possibilities. |                                                                                           |