# GetIssueCreatorsData

## Example Usage

```typescript
import { GetIssueCreatorsData } from "@versedbcom/sdk/models/operations";

let value: GetIssueCreatorsData = {
  id: 789,
  name: "Nick Spencer",
  role: {
    id: 1,
    name: "Writer",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | 789                                                                                   |
| `name`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | Nick Spencer                                                                          |
| `role`                                                                                | [operations.GetIssueCreatorsRole](../../models/operations/get-issue-creators-role.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |