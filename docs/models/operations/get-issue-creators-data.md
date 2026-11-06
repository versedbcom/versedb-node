# GetIssueCreatorsData

## Example Usage

```typescript
import { GetIssueCreatorsData } from "@versedbcom/sdk/models/operations";

let value: GetIssueCreatorsData = {
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 789                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | Nick Spencer                                                                                         |
| `nameI18n`                                                                                           | [operations.GetIssueCreatorsNameI18n](../../models/operations/get-issue-creators-name-i18n.md)       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `aliasesI18n`                                                                                        | [operations.GetIssueCreatorsAliasesI18n](../../models/operations/get-issue-creators-aliases-i18n.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `originalLocale`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | en                                                                                                   |
| `role`                                                                                               | [operations.GetIssueCreatorsRole](../../models/operations/get-issue-creators-role.md)                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |