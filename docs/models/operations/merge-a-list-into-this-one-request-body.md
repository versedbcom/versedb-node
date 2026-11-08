# MergeAListIntoThisOneRequestBody

## Example Usage

```typescript
import { MergeAListIntoThisOneRequestBody } from "@versedbcom/sdk/models/operations";

let value: MergeAListIntoThisOneRequestBody = {
  sourceListId: 207,
  deleteSource: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `sourceListId`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | The list whose items are pulled into this list. Must be owned by the authenticated user. | 207                                                                                      |
| `deleteSource`                                                                           | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether to delete the source list after its items are merged in. Defaults to `false`.    | false                                                                                    |