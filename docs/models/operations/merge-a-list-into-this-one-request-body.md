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

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `sourceListId`                                           | *number*                                                 | :heavy_check_mark:                                       | The list to merge in.                                    | 207                                                      |
| `deleteSource`                                           | *boolean*                                                | :heavy_minus_sign:                                       | Delete the source list after merging. Defaults to false. | false                                                    |