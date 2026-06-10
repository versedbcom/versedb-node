# GetIssueVariantsData

## Example Usage

```typescript
import { GetIssueVariantsData } from "@versedbcom/sdk/models/operations";

let value: GetIssueVariantsData = {
  id: 9001,
  variantName: "J. Scott Campbell Variant",
  variantType: "incentive",
  ratio: "1:25",
  coverUrl: "https://...",
  creators: [
    {
      id: 101,
      name: "J. Scott Campbell",
      role: "Cover Artist",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 9001                                                                                          |
| `variantName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | J. Scott Campbell Variant                                                                     |
| `variantType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | incentive                                                                                     |
| `ratio`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1:25                                                                                          |
| `coverUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | https://...                                                                                   |
| `creators`                                                                                    | [operations.GetIssueVariantsCreator](../../models/operations/get-issue-variants-creator.md)[] | :heavy_minus_sign:                                                                            | N/A                                                                                           | [<br/>{<br/>"id": 101,<br/>"name": "J. Scott Campbell",<br/>"role": "Cover Artist"<br/>}<br/>] |