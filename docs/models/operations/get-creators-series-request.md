# GetCreatorsSeriesRequest

## Example Usage

```typescript
import { GetCreatorsSeriesRequest } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsSeriesRequest = {
  creatorId: 789,
  limit: 20,
  q: "batman",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `creatorId`                                            | *number*                                               | :heavy_check_mark:                                     | The creator ID.                                        | 789                                                    |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Results per page (max 50).                             | 20                                                     |
| `q`                                                    | *string*                                               | :heavy_minus_sign:                                     | Optional case-insensitive search within these results. | batman                                                 |