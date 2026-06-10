# GetSeriesCreatorsData

## Example Usage

```typescript
import { GetSeriesCreatorsData } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCreatorsData = {
  id: 789,
  name: "Nick Spencer",
  role: {
    id: 1,
    name: "Writer",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 789                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | Nick Spencer                                                                            |
| `role`                                                                                  | [operations.GetSeriesCreatorsRole](../../models/operations/get-series-creators-role.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |