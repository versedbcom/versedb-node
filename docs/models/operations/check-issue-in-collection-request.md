# CheckIssueInCollectionRequest

## Example Usage

```typescript
import { CheckIssueInCollectionRequest } from "@versedbcom/sdk/models/operations";

let value: CheckIssueInCollectionRequest = {
  issueId: 5432,
  variantId: 789,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `issueId`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | The issue ID.                                                                                        | 5432                                                                                                 |
| `variantId`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Specific variant ID to check (optional).                                                             | 789                                                                                                  |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |