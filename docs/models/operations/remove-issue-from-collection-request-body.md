# RemoveIssueFromCollectionRequestBody

## Example Usage

```typescript
import { RemoveIssueFromCollectionRequestBody } from "@versedbcom/sdk/models/operations";

let value: RemoveIssueFromCollectionRequestBody = {
  variantId: null,
  collectionItemId: 16,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `variantId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | The <code>id</code> of an existing record in the issue_variants table. | null                                                                   |
| `collectionItemId`                                                     | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 16                                                                     |