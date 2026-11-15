# SetPullListIssueCoversRequestBody

## Example Usage

```typescript
import { SetPullListIssueCoversRequestBody } from "@versedbcom/sdk/models/operations";

let value: SetPullListIssueCoversRequestBody = {
  standard: true,
  variantIds: [
    789,
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `standard`                                                                        | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether the user is getting the main cover, the standard cover.                   | true                                                                              |
| `variantIds`                                                                      | *number*[]                                                                        | :heavy_check_mark:                                                                | The variants the user is getting, up to 50. May be empty when `standard` is true. | [<br/>789<br/>]                                                                   |