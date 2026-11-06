# GetSeriesCreatorsData

## Example Usage

```typescript
import { GetSeriesCreatorsData } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCreatorsData = {
  id: 789,
  name: "Nick Spencer",
  originalLocale: "en",
  role: {
    id: 1,
    name: "Writer",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | 789                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | Nick Spencer                                                                                           |
| `nameI18n`                                                                                             | [operations.GetSeriesCreatorsNameI18n](../../models/operations/get-series-creators-name-i18n.md)       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `aliasesI18n`                                                                                          | [operations.GetSeriesCreatorsAliasesI18n](../../models/operations/get-series-creators-aliases-i18n.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `originalLocale`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | en                                                                                                     |
| `role`                                                                                                 | [operations.GetSeriesCreatorsRole](../../models/operations/get-series-creators-role.md)                | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |