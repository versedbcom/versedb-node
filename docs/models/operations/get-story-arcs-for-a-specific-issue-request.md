# GetStoryArcsForASpecificIssueRequest

## Example Usage

```typescript
import { GetStoryArcsForASpecificIssueRequest } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificIssueRequest = {
  issueId: 207155,
  q: "batman",
  limit: 20,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `issueId`                                              | *number*                                               | :heavy_check_mark:                                     | The ID of the issue.                                   | 207155                                                 |
| `q`                                                    | *string*                                               | :heavy_minus_sign:                                     | Optional case-insensitive search within these results. | batman                                                 |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Number of results per page (max 50).                   | 20                                                     |